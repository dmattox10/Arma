import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            
            <div className='nav'>

                    <div className='left'>
                        <Link to='/'>SLEPPTEK: ARMA III</Link>
                    </div>
                    <div className='right'>
                        <Link to='/servers'>&nbsp;SERVERS</Link>
                        <Link to='/packages'>&nbsp;PACKAGES&nbsp;</Link>
                    </div>

            </div>
        )
    }
}