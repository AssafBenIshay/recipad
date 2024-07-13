import './TimeStageComplete.css'
import React from 'react'

export default function TimeStageComplete({timer}) {
    return (
        <div className='time-stage-complete'>
            <h2 className='name-title'>זמן :</h2>
            <h1 className=''>{timer}</h1>
        </div> 
    )
}