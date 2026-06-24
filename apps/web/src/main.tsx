import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Default to paper-minimal light theme (matches UX portfolio)
document.documentElement.classList.add('light');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
