import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Lines from './lines.component';
import OneLine from './oneLine.component';

configure({adapter: new Adapter()});

describe('<Lines />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Lines />);
    });


    it('Should be 3 lines by default', () => {
        expect(wrapper.find(OneLine)).toHaveLength(3);
    });

});