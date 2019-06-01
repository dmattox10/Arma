import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import Loadable from 'react-loadable';

import Loader from './components/Loader';
import Login from './components/Login';
import Nav from './components/Nav'

import './index.css'

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

const Main = Loadable({
    loader: () => import('./components/Front'),
    loading: Loader,
  });

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div className='main'>
              <hr />
              <Nav />
              <div className='content'>
                <hr />
                <Route exact path="/" component={ Main } />
                <Route exact path="/login" component={ Login } />
              </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;
