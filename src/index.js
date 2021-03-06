import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import { Provider } from "react-redux";
import './index.css';
import App from './components/App';
import reducer from './reducers'
import 'semantic-ui-css/semantic.min.css'
import middleware from './middleware'

const store = createStore(reducer, middleware);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

