import ReactDOM from 'react-dom';
import React from 'react';
import Lines from './components/lines/lines.component';
import { Provider } from 'react-redux';
import store from './reducers/store';
import "../assets/styles/global.scss";

ReactDOM.render(
    <Provider store={store}>
        <Lines />
    </Provider>,    
    document.getElementById('app-line'));