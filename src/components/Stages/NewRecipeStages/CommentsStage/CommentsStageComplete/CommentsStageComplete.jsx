import React from 'react';
import './CommentsStageComplete.css'

export default function CommentsStageComplete({ comments }) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    return (
         <div className='comments-stage-complete'>
            <h2 className='name-title'>הערות :</h2>
            <span className='comments-stage-complete'>{comments}</span>
        </div> 
    )
}