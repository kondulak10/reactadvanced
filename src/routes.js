import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from "./components/App"
import HomePage from "./components/home/HomePage"
import ItemsPage from "./components/item/ItemsPage"
import ManageItemPage from "./components/item/ManageItemPage"

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}></IndexRoute>
    <Route path="items" component={ItemsPage}/>
    <Route path="item/:id" component={ManageItemPage}/>
    <Route path="item" component={ManageItemPage}/>
  </Route>
)
