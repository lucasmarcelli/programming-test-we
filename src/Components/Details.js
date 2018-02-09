import React, { Component } from 'react';

class Details extends Component {
    
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch('details', this.props.actions.GET_MOVIE_DETAILS, { id: this.props.match.params.id });
    }
    
    render(){
        let details = { ...this.props.details };
        let year = details.release_date ? details.release_date.substr(0, 4) : '';
        return(
            <div className="details content">
                <div className="header">
                    <div className="text title">
                        {details.title}
                    </div>
                </div>
                <div className="details-section">
                    <div className="top">
                    <div className="left">
                        <img src={'http://image.tmdb.org/t/p/w342//' + details.poster_path}/>
                    </div>
                    <div className="right">
                        <span className="year">{year}</span>
                        <span className="runtime">{details.runtime} min</span>
                        <span className="rating">{details.vote_average}/10</span>
                        <div className="fav">
                            Mark as Favourite
                        </div>
                    </div>
                    </div>
                <div className="desc">
                    {details.overview}
                </div>
                <div className="trailer-links">
                    <h3 className="trailer-title">Trailers:</h3>
                </div>
                </div>
            </div>
        )
    }

}

export default Details;
