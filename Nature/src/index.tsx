import React, { StrictMode } from "react";
import ReactDOM  from "react-dom";
// import ReactDOM from 'react-dom/client';
import App from './App/App';
import './sass/main.scss';

ReactDOM.render(
  <StrictMode>
    <div className="App">
      <App />
    </div>
  </StrictMode>,
  document.getElementById('root')
)