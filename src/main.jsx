// Entry point of the React application
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap the app with routing support */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

