import './CategoryStageComplete.css'
import React from 'react'

export default function CategoryStageComplete({ recipeCategory }) {
    
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    return (
        <div className='category-stage-complete'>
            <h2 className='name-title'>קטגוריה :</h2>
            <h1 className=''>{recipeCategory }</h1>
        </div> 
    )
}