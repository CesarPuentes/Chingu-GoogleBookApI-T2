import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import $ from 'jquery';
import Popper from 'popper.js';
import axios from 'axios';
import marked from 'marked';
import googleBooksSearch from 'google-books-search';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
