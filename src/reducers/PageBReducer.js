import actionTypes from '../actions/actionTypes';
import actions from '../actions/actions';
import React from 'react';
import {handleActions} from "redux-actions";

const initialState = {
  data: []
};

export default handleActions({
  [actionTypes.PAGE_B_REQUEST] : (state, action) => ({
    ...state,
  }),
  [actionTypes.PAGE_B_SUCCESS] : (state, action) => ({
    ...state,
    data: action.payload.data
  }),
  [actionTypes.PAGE_B_FAILED] : (state, action) => ({
    ...state,
    error: action.error
  }),
}, initialState)
