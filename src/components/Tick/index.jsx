import React from 'react'
import './style.scss'

const Tick = props => {
    return (
        <div className="Tick">
            <div className="numbers">
                <div className="number">
                    {props.value[0]}
                </div>
                <div className="number">
                    {props.value[1]}
                </div>
            </div>
            <div className="title">
                {props.title}
            </div>
        </div>
    )
}

Tick.defaultProps = {
    value: "17",
    title: "title"
}

export default Tick