import React, { Component } from 'react';
import Poster from './Poster';

class Landing extends Component {
    
    constructor(props){
        super(props);
        this.renderPosters = this.renderPosters.bind(this);
    }
    
    render(){
        return <div className="landing content">
                {this.props.movies ? this.renderPosters() : null}
            </div>

    }

    renderPosters() {
        let items = [];
        if(!this.props.movies) return null;
        let movies = [...this.props.movies];
        for(let movie of movies) {
            items.push(
                <Poster key={'movie-' + movies.indexOf(movie)}
                        image={'http://image.tmdb.org/t/p/w342//' + movie.poster_path}
                        id={movie.id}
                />
            )
        }
        return items;
    }

}

export default Landing;
