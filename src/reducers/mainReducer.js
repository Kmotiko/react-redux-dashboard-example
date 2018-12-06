import actionTypes from '../actions/actionTypes';
import actions from '../actions/actions';
import React from 'react';
import {handleActions} from "redux-actions";

const initialState = {
  menuOpen: false
};

export default handleActions({
  [actionTypes.OPEN_MENU_REQUEST] : (state, action) => ({
    ...state,
    menuOpen: true,
  }),
  [actionTypes.CLOSE_MENU_REQUEST] : (state, action) => ({
    ...state,
    menuOpen: false,
  }),
}, initialState)

