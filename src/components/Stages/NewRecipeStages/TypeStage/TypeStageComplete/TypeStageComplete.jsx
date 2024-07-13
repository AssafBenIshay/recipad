import './TypeStageComplete.css'
import React from 'react'

export default function TypeStageComplete({type}) {
    return (
        <div className='type-stage-complete'>
            <h2 className='name-title'>סוג מנה :</h2>
            <h1 className=''>{type }</h1>
        </div> 
    )
};
