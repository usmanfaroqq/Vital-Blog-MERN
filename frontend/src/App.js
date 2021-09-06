import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './common/Notfound/NotFound';
import Home from './components/Home/Home';
import './scss/main.scss';

const App = () => {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="*" exact component={NotFound}/>
    </Switch>
  </Router>
  );
};

export default App;