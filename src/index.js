import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './dist/semantic.min.css';
// import './dist/semantic.min.js';

// ReactDOM.render(<App />, document.querySelector('#root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
