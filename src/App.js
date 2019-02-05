import React from "react";
import { Switch } from 'react-router-dom';
import "bootstrap";
import { ToastContainer } from "react-toastify";
import './assets/css/main.scss';
import Routes from './routes/Routes';
import Navigation from './components/common/Navigation';


const App = () => (
  <div>
    <Navigation />
      <Switch>
        <Routes />
      </Switch>
    <ToastContainer autoClose={3000} hideProgressBar />
  </div>
);

export default App;
