import Immutable from "immutable";
import configureStore from 'redux-mock-store';
import { addLine, deleteLine } from './lines';

const store = configureStore();

const initialState = {
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
    ])
}


describe('Test lines actions',()=>{
    let storeToTest;

    beforeEach(()=>{
        storeToTest = store(initialState);
    })

    it('addLine action works ', () => {
        let lineName = 'Massive_a line';
        let action;
        storeToTest.dispatch(addLine({line:{name:lineName}}));
        action = storeToTest.getActions();
        expect(action[0].type).toBe("LINE_ADD");
        expect(action[0].payload.line.name).toBe(lineName);
    });

    it('deletLine action works ', () => {
        let idToDelete = 3;
        let action;
        storeToTest.dispatch(deleteLine({id: idToDelete}));
        action = storeToTest.getActions();
        expect(action[0].type).toBe("LINE_DELETE");
        expect(action[0].payload.id).toBe(idToDelete);
    });

});