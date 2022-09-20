// The usual React imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './index.css';

// The main App component
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);