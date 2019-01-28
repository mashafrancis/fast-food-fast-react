import React, {Suspense} from "react";
import { Switch } from 'react-router-dom';
import "bootstrap";
import { ToastContainer } from "react-toastify";
import Spinner from './common/spinner';
import Routes from '../routes/Routes';


const App = () => (
  <div className="container-fluid">
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Routes />
      </Switch>
    </Suspense>
    <ToastContainer autoClose={3000} hideProgressBar />
  </div>
);

export default App;
