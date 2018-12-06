import actionTypes from '../actions/actionTypes';
import actions from '../actions/actions';
import React from 'react';
import {handleActions} from "redux-actions";

const initialState = {
  data: []
};

export default handleActions({
  [actionTypes.PAGE_A_REQUEST] : (state, action) => ({
    ...state,
  }),
  [actionTypes.PAGE_A_SUCCESS] : (state, action) => ({
    ...state,
    data: [...state.data, action.payload.data]
  }),
  [actionTypes.PAGE_A_FAILED] : (state, action) => ({
    ...state,
    error: action.error
  }),
}, initialState)
