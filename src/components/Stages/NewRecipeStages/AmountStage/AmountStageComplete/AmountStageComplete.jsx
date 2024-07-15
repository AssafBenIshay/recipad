import './AmountStageComplete.css'
import React from 'react'

export default function NameStageComplete({amount}) {
    return (
        <div className='name-stage-complete'>
            <h2 className='name-title'>כמות הסועדים :</h2>
            <h1 className=''>{ amount }</h1>
        </div> 
    )
}