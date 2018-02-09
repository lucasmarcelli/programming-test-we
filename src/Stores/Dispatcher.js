import { EventEmitter } from 'events';

class Dispatcher extends EventEmitter {

    constructor() {
        super();
        // this.setMaxListeners(100);
    }

    // Singleton pattern since we really only need a single dispatcher.
    static dispatch(action, payload) {
        // Dispatches the action to be consumed by concrete stores.
        // Like flux, all stores should consume this event and check the action.
        Dispatcher.get_instance().emit('ACTION', { action, payload });
    }

    static get_instance() {
        if(!Dispatcher.instance) {
            Dispatcher.instance = new Dispatcher();
            return Dispatcher.instance;
        } else {
            return Dispatcher.instance;
        }
    }
}

Dispatcher.instance = Dispatcher.get_instance();

export default Dispatcher;
