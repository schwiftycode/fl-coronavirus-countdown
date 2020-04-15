import React from 'react'

import './style.scss'

const Timer = props => {
    return (
        <div className="Timer">
            <h1>Time Left</h1>
            {/* Tick */}
            {/* Colon */}
            <div className="colon" />
            {/* Tick */}
            {/* Colon */}
            <div className="colon" />
            {/* Tick */}
        </div>
    )
}

export default Timer