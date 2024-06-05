import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';
import { DepositProvider } from './context/DepositContext.jsx';
import { LoanProvider } from './context/LoanContext.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <DepositProvider>
      <LoanProvider>
        <App />
      </LoanProvider>
    </DepositProvider>
  </React.StrictMode>
);
