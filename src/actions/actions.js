import { createActions } from 'redux-actions';
import axiosBase from 'axios';
import actionTypes from './actionTypes';


export const actions = createActions(
    {
      [actionTypes.PAGE_A_SUCCESS]: response => ({data: response.data}),
      [actionTypes.PAGE_A_FAILED]: error => ({error}),
      [actionTypes.PAGE_B_SUCCESS]: response => ({data: response.data}),
      [actionTypes.PAGE_B_FAILED]: error => ({error}),
    },
    actionTypes.PAGE_A_REQUEST,
    actionTypes.PAGE_B_REQUEST,
    actionTypes.OPEN_MENU_REQUEST,
    actionTypes.CLOSE_MENU_REQUEST,
);


////////////////////////////////////////////////////////
// PAGEA
////////////////////////////////////////////////////////
export const pageA = () => {
  return (dispatch) => {
    dispatch(actions.pageARequest())
  }
}


////////////////////////////////////////////////////////
// PAGEB
////////////////////////////////////////////////////////
export const pageB = () => {
  return (dispatch) => {
    dispatch(actions.pageBRequest())
  }
}

