import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'katex/dist/katex.min.css'; // Add this import
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();