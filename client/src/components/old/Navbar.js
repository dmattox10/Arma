import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authentication'
import { withRouter } from 'react-router-dom'

let isAuthenticated = true

class Navbar extends Component {

    render() {
        const authLinks = (
            <ul className="navbar-nav">
                <Link className="nav-link" to="/archive">Archive</Link>
            </ul>
        )
         const guestLinks = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Sign In</Link>
                </li>
            </ul> 
        )

        return(
            <nav className="navbar navbar-fixed-top navbar-dark bg-dark sticky-nav">
                <Link className="navbar-brand" to="/entry">Captain's Log</Link>
                <div className="d-flex justify-content-end" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar))