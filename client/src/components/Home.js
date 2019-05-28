import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../store';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authentication';

import Register from './Register'
import Login from './Login'
import Front from './Front'
import Footer from './Footer'
export default class Home extends Component {
    render() {
        return (
            <Provider store = { store }>
                <Router>
                    <div>
                        <Route exact path="/" component={ Front } />
                        <div className="container">
                            <Route exact path="/register" component={ Register } />
                            <Route exact path="/login" component={ Login } />
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

