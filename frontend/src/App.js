import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/common/Navbar/MainNavbar';
import NotFound from './components/common/Notfound/NotFound';
import Home from './components/Home/Home';
import './scss/main.scss';

const App = () => {
  return (
    <Router>
      <Navbar/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/register" exact component={Register}/>
      <Route path="/login" exact component={Login}/>
      <Route path="*" exact component={NotFound}/>
    </Switch>
  </Router>
  );
};

export default App;