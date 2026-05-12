import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeContext.tsx';
import App from './App.tsx';
import './index.css';

// Polyfill for process.env in case any library depends on it
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.process = window.process || { env: {} };
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
