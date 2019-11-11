import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers';


import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(ReduxPromise)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
