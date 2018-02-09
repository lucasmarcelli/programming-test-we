import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Poster extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        return <Link to={'/' + this.props.id}
                     className="poster-link">
            <div className="poster" style={{
                backgroundImage: `url(${this.props.image})`
            }}>
            </div>
        </Link>
    }

}

export default Poster;
