import { createAction } from 'redux-actions';
import { handleActions } from 'redux-actions';

import Immutable from 'immutable';

const initialState = Immutable.fromJS([
    {
        id: 0, name: 'redux line'
    },
    {
        id: 1, name: 'react line'  
    },
    {
        id: 2, name: 'immutable line'
    }
]);

const addLine = createAction('LINE_ADD');
const deleteLine = createAction('LINE_DELETE');


const lines = handleActions({
    [addLine](state, { payload: { line } }) {
        let lastLine = state.get(-1);
        let lastId = !!lastLine ? lastLine.get('id') : 0;
        return state.push(
            Immutable.Map({
                id: lastId + 1,
                name: line.name
            })
        );
    },
    [deleteLine](state, { payload: { id } }) {
        return state.filterNot(function(item) { 
            return item.get('id') === id
        });
    },
  }, initialState);

  export {addLine, deleteLine};
  
  
  export default lines;



