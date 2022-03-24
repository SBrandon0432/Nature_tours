import React, { StrictMode } from "react";
import ReactDOM  from "react-dom";
import App from './components/App/App'

ReactDOM.render(
  <StrictMode>
    <div>
      <App />
    </div>
  </StrictMode>,

  document.getElementById('root')
)