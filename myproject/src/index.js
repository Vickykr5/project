import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root using the correct method from react-dom/client
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
