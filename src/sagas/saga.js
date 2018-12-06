import {take, fork, call, put} from 'redux-saga/effects';
import {actions} from '../actions/actions';
import actionTypes from '../actions/actionTypes';


function* handlePageARequest() {
  while(true){
    const action = yield take(actionTypes.PAGE_A_REQUEST);
    yield put(actions.pageASuccess({data: "hoge" }));
  }
}

export default function* rootSaga(){
  yield fork(handlePageARequest);
}
