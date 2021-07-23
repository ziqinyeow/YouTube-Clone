import React from "react";
import ReactDOM from "react-dom";

//dependencies
import { BrowserRouter as Router } from "react-router-dom";

//style
import "./index.css";

//components
import App from "./App";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
