import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './style.js';
import { Global } from './style.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
