import * as types from './actionTypes'
import ItemApi from '../api/mockItemApi';
import {beginAjaxCall, ajaxCallError} from "./ajaxStatusActions"

export function loadItemsSuccess(items) {
  return {
    type: types.LOAD_COURSES_SUCCESS, items
  }
}

export function createItemSuccess(item) {
  return {
    type: types.CREATE_ITEM_SUCCESS, item
  }
}

export function updateItemSuccess(item) {
  return {
    type: types.UPDATE_ITEM_SUCCESS, item
  }
}

export function loadItems() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return ItemApi.getAll().then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(r => {
      dispatch(ajaxCallError(r))
      throw (r);
    });
  }
}

export function saveItem(item) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return ItemApi.saveItem(item).then(savedItem => {
      item.id ? dispatch(updateItemSuccess(savedItem)) :
        dispatch(createItemSuccess(savedItem));
    }).catch(r => {
      dispatch(ajaxCallError(r))
      throw (r);
    })
  }
}
