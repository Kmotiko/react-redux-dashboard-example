import React, {Component} from 'react'
import { IndexRoute, Route, Switch } from 'react-router'
import HomeContainer from '../containers/HomeContainer';
import PageAContainer from '../containers/PageAContainer';
import PageBContainer from '../containers/PageBContainer';

import DashboardDrawer from '../components/DashboardDrawer';


const App = () => (
  <Switch>
    <Route exact path="/" component={HomeContainer} />
    <Route path="/a" component={PageAContainer} />
    <Route path="/b" component={PageBContainer} />
  </Switch>

)


export default App

