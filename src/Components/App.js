import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom'
import withStore from '../Stores/withStore';

import Landing from './Landing';
import Navbar from './Navbar';
import Details from './Details';
import Movies from '../Stores/Movies';


const landingWithMovies = withStore(Landing, [
    { Store: Movies, ...Movies.Actions.GET_POP_MOVIES, fireOn: 'COMPONENT_DID_MOUNT', prop: 'movies' }
]);

const detailsWithMovie = withStore(Details, [
    { Store: Movies, ...Movies.Actions.GET_MOVIE_DETAILS }
]);


class App extends Component {
  render() {
    return  <Router>
                <div className="we-movies">
                    <Route render={withRouter(Navbar)}/>
                    <Switch>
                        <Route exact path="/" component={landingWithMovies}/>
                        <Route exact path="/:id" component={detailsWithMovie}/>
                    </Switch>
                </div>
            </Router>
  }
}

export default App;

