import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;

const Login = Loadable({
  loader: () => import('./views/Login/Login'),
  loading
});

const LogOut = Loadable({
  loader: () => import('./views/Login/LogOut'),
  loading
});

const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" name="Login" component={Login} />
          <Route path="/LogOut" name="LogOut" component={LogOut} />
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
