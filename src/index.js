import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'lightbox2/dist/css/lightbox.css';
import 'lightbox2/dist/js/lightbox-plus-jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
