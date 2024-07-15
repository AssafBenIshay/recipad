import React from 'react'
import './AmountStage.css'
import InputDigit from '../../InputDigit'
import AmountStageComplete from './AmountStageComplete/AmountStageComplete'

export default function AmountStage({stage,setStage,amount,setAmount }) {
    const [valD, setValD] = React.useState('')
    
    function handleClick() {
        { valD && setAmount(valD) }
        setStage(6)
    }

    return (
        <>
            {stage ===5 ?<div className='amount-container'>
                <h2 className='name-title'>שלב חמישי : </h2>
                <h4 className=''>בבקשה הכניסי את כמות הסועדים</h4>
                <InputDigit setValD={setValD} placeholder='מנות'/>
                <h4 className=''>לחצי כאן לאחר שבחרת את כמות הסועדים בשביל</h4>
                <button onClick={handleClick}>לעבור לשלב הבא</button>
            </div>:<AmountStageComplete amount={amount} />}
            
        </>
    )
}
