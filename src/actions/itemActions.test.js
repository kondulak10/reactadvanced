import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import * as itemActions from "./itemActions";
import * as types from "./actionTypes";

import thunk from 'redux-thunk'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'

describe("actions", () => {
  it("actions", () => {
    const item = {
      title: "test"
    }
    const expected = {
      type: types.CREATE_ITEM_SUCCESS,
      item: item
    }

    const action = itemActions.createItemSuccess(item);

    expect(action).toEqual(expected);
  });
})

const middleware = [thunk];
const mockStore = configureMockStore(middleware)

describe("",()=>{
  afterEach(()=>{
    nock.cleanAll();
  })

  it ("nock", (done)=>{
    const expectedACtions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_COURSES_SUCCESS, body: {items: [{id: 1, title: "Clean"}]}}
    ]

    const store = mockStore({items: [], expectedACtions})
    store.dispatch(itemActions.loadItems()).then(()=>{
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
      done();
    })
  })
});

