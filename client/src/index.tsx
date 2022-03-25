import React, { StrictMode } from "react";
import ReactDOM  from "react-dom";
import App from './App/App'
import '../sass/main.scss';

ReactDOM.render(
  <StrictMode>
    <div>
      <App />
    </div>
  </StrictMode>,

  document.getElementById('root')
)