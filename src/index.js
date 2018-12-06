import React from 'react'
import ReactDOM from 'react-dom'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, Switch } from 'react-router'
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router'

import {actions} from './actions/actions';

import { createBrowserHistory } from 'history';
import configureStore from './store/store';
import {getTemplates, getPipelines} from './actions/actions';

import App from './components/App';


const history = createBrowserHistory()
const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
