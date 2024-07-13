import React from 'react';
import InputDigit from '../../InputDigit'
import TimeStageComplete from './TimeStageComplete/TimeStageComplete';
import './TimeStage.css'

export default function TimeStage({ stage, setStage, timer, setTimer }) {
    const [hours, setHours] = React.useState('')
    const [minutes,setMinutes] = React.useState('')
    
    function handleClick() {
        setTimer(`${hours} שעות ו${minutes} דקות.`)
        setStage(5)
    }
    
    return (
        <>
            {stage === 4 ? <div className='time-container'>
                <h2 className='name-title'>שלב רביעי : </h2>
                <h4> אנא הכניסי את הזמן הרצוי להכנת המתכון :</h4>
                <InputDigit setHours={setHours} placeholder='שעות' />
                <InputDigit setMinutes={setMinutes} placeholder='דקות' />
                <h4 className=''>לחצי כאן לאחר שהגדרת זמן בשביל</h4>
                <button onClick={handleClick}>לעבור לשלב הבא</button>
            </div> : <TimeStageComplete timer={timer} />}

        </>
    )
}