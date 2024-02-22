import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 

if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./shared/mocks/browser.js');
    worker.start();
  }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);