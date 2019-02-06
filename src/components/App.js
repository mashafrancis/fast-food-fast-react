import '@babel/polyfill';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './common/Navigation';
import routes from '../routes';


const App = () => (
  <div>
    <Navigation/>
    <Router>
      <Switch>
        {routes.map(route => (
          <Route exact={route.exact} path={route.path}
                 component={route.component} key={route.path}/>
        ))}
      </Switch>
    </Router>
  </div>
);

export default App;
