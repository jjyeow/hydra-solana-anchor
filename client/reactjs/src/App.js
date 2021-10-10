import React from 'react';
import { Router,Switch, Route } from 'react-router-dom';
import history from './history';
import logo from './logo.svg';
import './App.css';

import Landing from './pages/landing'
import Dashboard from './pages/dashboard';
import SignUp from './pages/signup';

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={props => (<Landing {...props} />)}/>
          <Route exact path="/dashboard" render={props => (<Dashboard {...props} />)}/>
          <Route exact path="/signup" render={props => (<SignUp {...props} />)}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
