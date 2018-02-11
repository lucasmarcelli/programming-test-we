import React from 'react';
import { shallow, mount } from 'enzyme';
import { tempMovies } from '../temporarymovies';
import Poster from '../Components/Poster';
import MockRouter from 'react-mock-router';
import { Link } from 'react-router-dom';


describe('<Poster/> renders correctly', () => {
    it('renders without crashing', () => {
        expect(shallow(<Poster/>));
    });

    it('renders the correct image', () => {
        const push = jest.fn();
        let wrapper = mount(<MockRouter push={push}><Poster {...tempMovies[0]}
                                                            image={'http://image.tmdb.org/t/p/w342//' + tempMovies[0].poster_path}/></MockRouter>);
        let poster = wrapper.find(Poster).get(0);
        let imagediv = wrapper.find('.poster').get(0);
        expect(imagediv.props.style.backgroundImage === 'url(' + poster.props.image + ')');
    });

    it('has the correct link', () => {
        const push = jest.fn();
        let wrapper = mount(<MockRouter push={push}><Poster {...tempMovies[0]}
                                                            image={'http://image.tmdb.org/t/p/w342//' + tempMovies[0].poster_path}/></MockRouter>);
        let poster = wrapper.find(Poster).get(0);
        let link = wrapper.find(Link).get(0);
        expect(link.props.to === '/' + poster.props.id)
    });

    it('clicking pushes /:id onto router state', () => {
        const push = jest.fn();
        let wrapper = mount(<MockRouter push={push}><Poster {...tempMovies[0]}
                                                            image={'http://image.tmdb.org/t/p/w342//' + tempMovies[0].poster_path}/></MockRouter>);
        let poster = wrapper.find(Poster).get(0);
        let link = wrapper.find(Link);
        link.simulate('click', { button: 0 });
        expect(push).toBeCalledWith('/' + poster.props.id)
    });
});
