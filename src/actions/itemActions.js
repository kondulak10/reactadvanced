import * as types from './actionTypes'
import ItemApi from '../api/mockItemApi';

export function createItem(item) {
  return { type: types.CREATE_ITEM, item }
}

export function loadItemsSuccess(items) {
  return {
    type: types.LOAD_COURSES_SUCCESS, items
  }
}

export function loadItems() {
  return function (dispatch) {
    return ItemApi.getAll().then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(r=>{
      throw(r);
    });
  }
}
