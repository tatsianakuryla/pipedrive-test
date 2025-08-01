import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/modern-normalize.css';
import './styles/main.css';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
