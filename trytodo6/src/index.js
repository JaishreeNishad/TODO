import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MainComponent } from './MainComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainComponent>
    <App />
   </MainComponent>
);


reportWebVitals();
