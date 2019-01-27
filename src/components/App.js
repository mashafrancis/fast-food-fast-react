import React, {Suspense} from "react";
import { Route, Switch } from 'react-router-dom';
import "bootstrap";
import { ToastContainer } from "react-toastify";
import Spinner from './common/spinner';
import PageNotFound from './PageNotFound';


const App = () => (
  <div className="container-fluid">
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route render={PageNotFound} />
      </Switch>
    </Suspense>
    <ToastContainer autoClose={3000} hideProgressBar />
  </div>
);

export default App;
