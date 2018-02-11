/**
 * @jest-environment node
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { tempMovies } from '../temporarymovies';
import MockRouter from 'react-mock-router';
import Poster from '../Components/Poster';
import Landing from '../Components/Landing';

describe('`<Landing/>` renders correctly', () => {
    it('Renders without crashing.', () => {
        expect(shallow(<Landing />));
    });

    it('will accept an array of posters', () => {
        const push = jest.fn();
        let landing = mount(
            <MockRouter push={push}>
                <Landing movies={tempMovies}/>
            </MockRouter>
        ).find(Landing).get(0);
        expect(landing.props.movies && landing.props.movies.length > 0);
    });

    it('will render a `<Poster/>` for each item in the array', () => {
        const push = jest.fn();
        let landing = mount(
            <MockRouter push={push}>
                <Landing movies={tempMovies}/>
            </MockRouter>
        ).find(Landing);
        let posters = landing.find(Poster);
        expect(posters.length === landing.get(0).props.movies.length);
    });
});
