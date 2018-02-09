import Store from './Store';
import Dispatcher from './Dispatcher';

class Movies extends Store {

    // I find the singleton pattern useful for stores, as it prevents accidentally creating multiple instances and
    // feels more react-y than exporting an instance.
    static get_instance() {
        if(!Movies.instance) {
            Movies.instance = new Movies();
            return Movies.instance;
        } else {
            return Movies.instance;
        }
    }

    constructor() {
        // Set base
        super('http://api.themoviedb.org/3');

        this.movies = null;

        this.get_popular = this.get_popular.bind(this);
        this.get_movie = this.get_movie.bind(this);
    }

    get_popular({ prop }) {
        if(!this.movies) {
            this.doFetch({ url: '/movie/popular' }).then((response) => {
                let movies = response.results.slice(0, 12);
                this.movies = movies;
                this.emit(Movies.Actions.GET_POP_MOVIES.event, { prop, value: movies })
            })
        } else {
            this.emit(Movies.Actions.GET_POP_MOVIES.event, { prop, value: this.movies })
        }
    }

    get_movie({ prop, params }) {
        let { id } = params;
        this.doFetch({ url: '/movie/' + id }).then((response) => {
            console.log(response);
            this.emit(Movies.Actions.GET_MOVIE_DETAILS.event, { prop, value: response });
        })
    }
}



Movies.instance = Movies.get_instance();

Movies.Actions = {
    GET_POP_MOVIES: {
        action: 'GET_POP_MOVIES',
        event: 'GOT_POP_MOVIES',
        func: Movies.get_instance().get_popular
    },
    GET_MOVIE_DETAILS: {
        action: 'GET_MOVIE_DETAILS',
        event: 'GOT_MOVIE_DETAILS',
        func: Movies.get_instance().get_movie
    }
};

Dispatcher.get_instance().on('ACTION', ({ action, payload }) => {
    switch(action) {
        case Movies.Actions.GET_POP_MOVIES.action:
            Movies.Actions.GET_POP_MOVIES.func(payload);
            break;
        case Movies.Actions.GET_MOVIE_DETAILS.action:
            Movies.Actions.GET_MOVIE_DETAILS.func(payload);
            break;
    }
});

export default Movies;
