import React from 'react';
import { render, configure } from 'enzyme';
import {Provider} from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import Basket from '../src/components/Basket';
import configureStore from 'redux-mock-store'

configure({ adapter: new Adapter() });

const initialState = {
    cart: {
        items: [
            {
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
            },
            {
                "_id":"5c7d5f27fb6fc072012d8e34",
                "title": "Xiaomi Redmi 6",
                "img": "../img/xiaomi_redmi_6_32gb_64gb.jpeg",
                "text": "Mobile ok",
                "price": 290,
                "sizeScreen": 5.45,
                "technologyScreen": "IPS",
                "os": "iOS",
                "ram": 3,
                "flashMemory": 64,
                "camera": 12,
                "color": "Black"
            }
        ],
    },
    match: {
        params: {
            type: 'mobiles',
            prodid: 123456
        },
    }
};

const mockStore = configureStore();

describe('<Basket />', () => {
    it('Render', () => {
        let store = mockStore(initialState),
            wrapper = render( <Provider store={store}><Basket /></Provider> )
        expect(wrapper).toMatchSnapshot();
    });
});