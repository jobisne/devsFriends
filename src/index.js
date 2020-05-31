import React from "react";
import ReactDOM from "react-dom";
import { Provider, } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import App from "./App";
import "tachyons";
import { searchDevs,requestRobots } from "./reducers";
import * as serviceWorker from "./serviceWorker";


const rootReducers = combineReducers({ searchDevs, requestRobots })

const logger = createLogger();

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
