import React, { Component } from 'react';
import Dispatcher from './Dispatcher';

// Higher Order Component to wrap a component with the ability to get and send data through stores
const withStore = (Wrapped, Actions) => {

    //eslint-disable-next-line
    const WithStore = class extends Component {

        constructor(props) {
            super(props);
            this.register = this.register.bind(this);
            this.unregister = this.unregister.bind(this);
            this.setProps = this.setProps.bind(this);
            this.dispatch = this.dispatch.bind(this);

            this.didMount = [];
            this.willMount = [];
            let actions = {};
            for(let action of Actions) {
                this.register(action);
                actions[action.action] = action;
                if(action.fireOn) {
                    if(action.fireOn === 'COMPONENT_DID_MOUNT'){
                        this.didMount.push(action);
                    } else if(action.fireOn === 'COMPONENT_WILL_MOUNT') {
                        this.willMount.push(action);
                    }
                }
            }

            this.state = {
                'actions': actions
            };
        }

        // Dispatch willMounts
        componentWillMount() {
            for(let action of this.willMount) {
                this.dispatch(action.prop, action, action.params);
            }
        }

        // Dispatch didMounts
        componentDidMount() {
            for(let action of this.didMount) {
                this.dispatch(action.prop, action, action.params);
            }
        }

        // Unregister all listeners when the component is Unnounted
        componentWillUnmount() {
            for(let action of Actions) {
                this.unregister(action);
            }
        }

        render() {
            // HOC Proxy Props pattern
            return <Wrapped {...this.props}
                            {...this.state}
                            dispatch={this.dispatch}
            />
        }

        unregister(action) {
            let Store = action.Store.get_instance();
            Store.removeListener(action.event, this.setProps);
        }

        register(action) {
            let Store = action.Store.get_instance();
            Store.on(action.event, this.setProps);
        }

        setProps({ prop, value }) {
            this.setState({ [prop]: value });
        }

        dispatch(prop, action, params={}) {
            Dispatcher.dispatch(action.action, { prop: prop, params: params, ...action })
        }

    };

    WithStore.displayName = 'WithStores';
    return WithStore;
};

export default withStore;
