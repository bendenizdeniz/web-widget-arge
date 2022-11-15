import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import {ChatProvider} from "./ChatProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ChatProvider>
        <App />
      </ChatProvider>
  </React.StrictMode>
);