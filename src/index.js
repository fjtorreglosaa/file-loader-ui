import React from 'react';
import ReactDOM from 'react-dom/client';
import { FileUploader } from './Components/FileUploader';
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FileUploader />
  </React.StrictMode>
);
