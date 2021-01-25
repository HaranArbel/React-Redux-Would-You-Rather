import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from "redux";
import './index.css';
import App from './components/App';
import reducer from './reducers'

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
