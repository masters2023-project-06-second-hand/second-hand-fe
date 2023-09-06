import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyles } from '@styles/GlobalStyles.ts';
import worker from '@mocks/workers.tsx';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
