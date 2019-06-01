import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import TopLeft from './TL'
import TopRight from './TR'
import BotLeft from './BL'
import BotRight from './BR'

export default class Front extends Component {
    render() {
        return (
            <div className='container'>
                <div id='left' className='column'>
                    <TopLeft />
                    <BotLeft />
                </div>
                <div id='right' className='column'>
                    <TopRight />
                    <BotRight />
                </div>
            </div>
        )
    }
}