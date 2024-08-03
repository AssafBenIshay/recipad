import React from 'react';
import './ImageStageComplete.css'

export default function ImageStageComplete({ image }) {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    return (
         <div className='image-stage-complete'>
            <img src={image} alt='תמונה של המנה ששמרת' />
        </div> 
    )
}