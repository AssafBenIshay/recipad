import './LinkStageComplete.css'
import React from 'react'

export default function LinkStageComplete({rLink}) {
    
    return (
        <div className='link-stage-complete'>
            <h2 className='name-title'>קישור :</h2>
            <span className='link-stage-complete'>{rLink}</span>
        </div>
    )
}