import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductPage from './Q8';
import ProductPage2 from './Q82';
import Q8c from './Q8c';
import Q3 from './Q3';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductPage />
    <Q8c />
    <ProductPage2 />
    <Q8c />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
