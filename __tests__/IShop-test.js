import React from 'react';
import { render, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import Home from '../src/components/Home';
import Basket from '../src/components/Basket';

configure({ adapter: new Adapter() });

import IShop from '../src/components/IShop';

describe('<IShop />', () => {
    it('Render', () => {
        let wrapper = render(<IShop />);
        expect(wrapper).toMatchSnapshot();
    });
    it('Route /', () => {
        let wrapper = mount(
            <MemoryRouter initialEntries={[ '/' ]}>
                <IShop/>
            </MemoryRouter>
        );
        expect(wrapper.find(Home)).toHaveLength(1);
        expect(wrapper.find(Basket)).toHaveLength(0);

    });
});