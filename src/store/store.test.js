import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {createStore} from 'redux'
import rootReducer from '../reducers'
import initialState from "../reducers/initialState"
import * as itemActions from "../actions/itemActions"



describe("store", ()=>{
  it ("store", ()=>{
    const store = createStore(rootReducer, initialState);
    const item = {
      title: "Cleam"
    }

    const action = itemActions.createItemSuccess(item);
    store.dispatch(action)

    const actual = store.getState().items[0];
    const expected = {
      title: "Cleam"
    }

    expect(actual).toEqual(expected);
  });


})
