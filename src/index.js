/*
 * @Author: your name
 * @Date: 2021-03-01 17:10:31
 * @LastEditTime: 2021-03-01 23:29:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-template/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.scss';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
