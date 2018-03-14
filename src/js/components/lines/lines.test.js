import 'jsdom-global/register';
import React from 'react';

import Adapter from 'enzyme-adapter-react-16';

import Lines from './lines.component';
import OneLine from './oneLine/oneLine.component';

describe('<Lines />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Lines />);
    });


    it('Should be 3 lines by default', () => {
        expect(wrapper.find(OneLine)).toHaveLength(3);
    });

    it('should add new line',() => {
        const masiveLine = 'massive line';
              
        expect(wrapper.find(OneLine)).toHaveLength(3);

        wrapper.setState({newLine: masiveLine});
        wrapper.find('button.btn').simulate('click');

        expect(wrapper.find(OneLine)).toHaveLength(4);
        expect(wrapper.find(OneLine).last().props().name).toBe(masiveLine);
    })

    it('should delete one line',() => {
        
        let mWrapper = mount(<Lines />);
        
        expect(mWrapper.find(OneLine)).toHaveLength(3);

        mWrapper.find(OneLine).find('i').at(1).simulate('click');

        expect(mWrapper.find(OneLine)).toHaveLength(2);
    })

});