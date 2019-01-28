import React, {Suspense} from "react";
import { Switch } from 'react-router-dom';
import "bootstrap";
import { ToastContainer } from "react-toastify";
import './assets/css/main.scss';
import Spinner from './components/common/spinner';
import Routes from './routes/Routes';
import Navigation from './components/common/Navigation';


const App = () => (
  <div>
    <Navigation />
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Routes />
      </Switch>
    </Suspense>
    <ToastContainer autoClose={3000} hideProgressBar />
  </div>
);

export default App;
