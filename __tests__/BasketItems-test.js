import React from 'react';
import { render, configure } from 'enzyme';
import {Provider} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import BasketItem from '../src/components/BasketItem';
import configureStore from 'redux-mock-store'

configure({ adapter: new Adapter() });

const device = {
    "_id": "5c5eff0bfb6fc03ad2ff3c40",
    "title": "Honor 10",
    "img": "../img/honor10_4gb_128gb_col_l29a.jpeg",
    "text": "Mobile ok",
    "price": 820,
    "sizeScreen": 5.84,
    "technologyScreen": "IPS",
    "os": "Android",
    "ram": 4,
    "flashMemory": 128,
    "camera": 24,
    "color": "Blue"
};

const mockStore = configureStore();

describe('<BasketItem />', () => {
    it('Render', () => {
        let store = mockStore(),
            wrapper = render( <Provider store={store}><BasketItem device={device} position={1}/></Provider> );
        expect(wrapper).toMatchSnapshot();
    });
});