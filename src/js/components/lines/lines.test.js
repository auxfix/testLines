import 'jsdom-global/register';
import React from 'react';

import Immutable from "immutable";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

import Lines from './lines.component';
import OneLine from './oneLine/oneLine.component';

const store = configureStore();

const mockStore = store({
	lines: Immutable.fromJS([
        {
            id: 0, name: 'redux line'
        },
        {
            id: 1, name: 'react line'  
        },
        {
            id: 2, name: 'immutable line'
        }
    ]),
});



describe('<Lines />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={mockStore}>
                <Lines />
            </Provider>);
    });

    it('lines match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Should be 3 lines by default', () => {
        expect(wrapper.find(OneLine)).toHaveLength(3);
    });
});