import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { configurestore } from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configurestore()
console.log('store: ',store.getState())
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
