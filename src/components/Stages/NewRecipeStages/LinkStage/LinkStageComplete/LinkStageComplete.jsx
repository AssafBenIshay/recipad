import './LinkStageComplete.css'
import React from 'react'

export default function LinkStageComplete({rLink}) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    return (
        <div className='link-stage-complete'>
            <h2 className='name-title'>קישור :</h2>
            <span className='link-stage-complete'><p>{rLink}</p></span>
        </div>
    )
}