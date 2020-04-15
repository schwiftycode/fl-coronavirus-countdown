import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Tick } from '../index'

import './style.scss'

const Timer = props => {

    const [timerValues, setTimerValues] = useState("012345")

    useEffect(_ => {
        setInterval(_ => {
            let now = new Date().getTime()
            let end = new Date(2020, 3, 30).getTime()
            let timeLeft = moment.duration(end - now, 'milliseconds')
            let days = timeLeft.days().toString()
            if (days.length == 1) {
                days = `0${days}`
            }
            let hours = timeLeft.hours().toString()
            if (hours.length == 1) {
                hours = `0${hours}`
            }
            let minutes = timeLeft.minutes().toString()
            if (minutes.length == 1) {
                minutes = `0${minutes}`
            }
            setTimerValues(`${days}${hours}${minutes}`)
        }, 100)
    }, [])

    return (
        <div className="Timer">
            <h1>Time Left</h1>
            <div className="content">
                {/* Tick */}
                <Tick title="days" value={timerValues.substring(0, 2)} />
                {/* Colon */}
                <div className="colon" />
                {/* Tick */}
                <Tick title="hours" value={timerValues.substring(2, 4)} />
                {/* Colon */}
                <div className="colon" />
                {/* Tick */}
                <Tick title="minutes" value={timerValues.substring(4, 6)} />
            </div>
        </div>
    )
}

export default Timer