/**
 * Created by alexgo on 11/14/2017.
 */
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }from 'react-router-dom';
import App from './App.js';

const app =(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('app'));