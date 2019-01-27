import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import configureStore from "./redux/configureStore";
import ErrorBoundary from "./components/ErrorBoundary";
import "./assets/css/index.scss";

const store = configureStore();

render(
  <ErrorBoundary>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
