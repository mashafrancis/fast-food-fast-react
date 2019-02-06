import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import PageNotFound from './PageNotFound';
import Navigation from './common/Navigation';


const App = () => (
  <div>
    <Navigation/>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Switch>
          <Route exact path={Login}/>
          <Route exact path={Signup}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Switch>
    </Router>
  </div>
);

export default App;
