import Immutable from 'immutable';
import lines from './lines';
import { addLine, deleteLine } from './lines';
import * as matchers from 'jest-immutable-matchers';


describe('Test lines reducer', () => {
    let initState;

    beforeEach(()=>{
        initState = Immutable.fromJS([
            {
                id: 0, name: 'redux line'
            },
        ]);
        jest.addMatchers(matchers);
    })

    
  it('default state is correct', () => {
    expect(lines(initState, {type:'empty_action'})).toEqualImmutable(initState)
  });
  
  it('line added correctly', () => {
    let lineToAdd = {id: 1, name: 'brand new line'};
    
    let resultState = initState.push(Immutable.Map(lineToAdd));

    expect(lines(initState, addLine({line:lineToAdd}))).toEqualImmutable(resultState);
  });

  it('line added correctly to empty list', () => {
    let lineToAdd = {id: 1, name: 'brand new line'};
    
    let emptyState = Immutable.fromJS([]);

    let resultState = emptyState.push(Immutable.Map(lineToAdd));

    expect(lines(emptyState, addLine({line:lineToAdd}))).toEqualImmutable(resultState);
  });

  it('line deleted correctly', () => {
    let lineToDelete = {id: 0}
    
    let resultState = Immutable.fromJS([]);

    expect(lines(initState, deleteLine(lineToDelete))).toEqualImmutable(resultState);
  });
});