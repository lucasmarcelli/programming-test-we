/**
 * @jest-environment node
 */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { tempMovies } from '../temporarymovies';
import MockRouter from 'react-mock-router';
import Navbar from '../Components/Navbar';
import { Route } from 'react-router-dom';

describe('Navbar renders correctly', () => {
    it('Renders without crashing.', () => {
        expect(shallow(
            <MockRouter>
                <Navbar />
            </MockRouter>));
    });

    it('says Pop Movies when the route is /', () => {
        let wrapper = mount(
            <MockRouter location={{ pathname: '/' }} path={'/'}>
                <Route exact path={'/'} component={Navbar}/>
            </MockRouter>
        );
        expect(wrapper.find('.text').get(0).props.children === 'Pop Movies')

    });

    it('says ← MovieDetail when the route is not /', () => {
        let wrapper = mount(
            <MockRouter location={{ pathname: '/12345' }} path={'/'}>
                <Route exact path={'/12345'} component={Navbar}/>
            </MockRouter>
        );
        expect(wrapper.find('.text').get(0).props.children === '← MovieDetail')
    });
});
