/**
 * Created by alexgo on 11/14/2017.
 */
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,HashRouter }from 'react-router-dom';
import App from './App.js';

const app =(
    <HashRouter>
      <App />
    </HashRouter>
);

ReactDOM.render(app, document.getElementById('app'));