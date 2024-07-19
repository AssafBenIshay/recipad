import React from 'react';
import './ImageStageComplete.css'

export default function ImageStageComplete({image}) {
    return (
         <div className='image-stage-complete'>
            <img src={image} alt='תמונה של המנה ששמרת' />
        </div> 
    )
}