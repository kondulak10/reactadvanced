import routes from "./routes";
import "babel-polyfill"
import React from 'react';
import { render } from "react-dom"
import { Router, browserHistory } from "react-router"
import "./styles/styles.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'
import {loadItems} from './actions/itemActions'
import "../node_modules/toastr/build/toastr.min.css"

const store = configureStore()
store.dispatch(loadItems())

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}></Router>
  </Provider>,
  document.getElementById("app")
)
