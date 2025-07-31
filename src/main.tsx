import React from 'react';
import { createRoot } from 'react-dom/client';
import {App} from "./App.tsx";
import './styles/modern-normalize.css';
import './styles/main.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
