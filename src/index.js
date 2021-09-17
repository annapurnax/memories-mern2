//initialize redux
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux"; //keeps track of the store which is the global state and helps us access tht state from anywhere
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers/index"; //index.js from reducers imported
import "./index.css";
//setting up the redux
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
