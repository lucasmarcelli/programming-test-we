/**
 * @jest-environment node
 */
import React from 'react';
import App from '../Components/App';
import { shallow, mount } from 'enzyme';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

describe('<App/> renders children.', () => {
    it('Renders without crashing.', () => {
        expect(shallow(<App />));
    });

    it('Includes a <Router/>', () => {
       expect(shallow(<App/>).find(Router).exists());

    });

    test('When loaded, `.we-movies` should have exactly 2 children mounted.', () => {
        const wemovies = mount(<App/>).find('.we-movies').get(0);
        expect(wemovies.props.children.length === 2);
    });
});



