import * as types from "../actions/actionTypes"
import initialState from './initialState';

export default function itemReducer(state = initialState.items, action) {
  switch (action.type) {
    case types.CREATE_ITEM:
      return [...state,
      Object.assign({}, action.item)
      ]
    case types.LOAD_COURSES_SUCCESS:
      return action.items
    default:
      return state;
  }
}
