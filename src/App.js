import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Node from './components/pages/Node';
import React from './components/pages/React';
import SignUp from './components/pages/SignUp';
import Python from './components/pages/Python';
import ReactNative from './components/pages/ReactNative';
import Vue from './components/pages/Vue';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/react' exact component={React} />
          <Route path='/node' exact component={Node} />
          <Route path='/python' exact component={Python} />
          <Route path='/reactNative' exact component={ReactNative} />
          <Route path='/vue' exact component={Vue} />
          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
