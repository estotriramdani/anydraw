import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App';
import { AppContextProvider } from './context/AppContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <div className="mobile">Please open in desktop device</div>
      <Toaster />
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
