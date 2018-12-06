import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'
import rootReducers from '../reducers'
import rootSaga from '../sagas/saga';


const initialState = {
  pagea:{ data: [], },
  pageb: { data: [], },
}

export default function configureStore(history) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    connectRouter(history)(rootReducers),
    initialState,
    applyMiddleware(
      sagaMiddleware, createLogger(), routerMiddleware(history)
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
