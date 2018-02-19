import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import itemReducer from "./itemReducer";
import * as actions from "../actions/itemActions"



describe("reducer", ()=>{
  it ("test", ()=>{
    const initialState = [
      {title: "A"},
      {title: "B"}
    ];

    const newItem = {title: "C"}

    const action = actions.createItemSuccess(newItem);

    const newState = itemReducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual("A");
    expect(newState[1].title).toEqual("B");
    expect(newState[2].title).toEqual("C");


  });

  it ("test update", ()=>{
    const initialState = [
      {id: 1, title: "A"},
      {id: 2, title: "B"},
      {id: 3, title: "C"}
    ];

    const newItem = {id: 2, title: "BBBB"}

    const action = actions.updateItemSuccess(newItem);

    const newState = itemReducer(initialState, action);

    const updated = newState.find(a=>a.id == newItem.id);
    const notUpdated = newState.find(a=>a.id == 1);

    expect(updated.title).toEqual("BBBB");
    expect(notUpdated.title).toEqual("A");
    expect(newState.length).toEqual(3);
  })

})
