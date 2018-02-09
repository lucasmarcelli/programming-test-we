import React, { Component } from 'react';


class Navbar extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        const { match, location, history } = this.props;
        // When store is added, it will come from there.
        let text = location.pathname === '/' ? (<div className="text">Pop Movies</div>) : (<div onClick={() => this.props.history.push('')} className="text">← MovieDetail </div>);
        return <nav className="navbar">
                    {text}
                    <div className="dots"><i className="fas fa-ellipsis-v"></i></div>
                </nav>

    }

}

export default Navbar;
