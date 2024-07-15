import './NameStageComplete.css'
import React from 'react'

export default function NameStageComplete({name}) {
    return (
        <div className='name-stage-complete'>
            <h2 className='name-title'>שם המתכון :</h2>
            <h1 className=''>{name }</h1>
        </div> 
    )
}