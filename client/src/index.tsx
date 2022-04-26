import React, { StrictMode } from "react";
import ReactDOM  from "react-dom";
import App from './App/App'
import '../sass/main';

ReactDOM.render(
  <StrictMode>
    <div className="App">
      <App />
    </div>
  </StrictMode>,
  document.getElementById('root')
)