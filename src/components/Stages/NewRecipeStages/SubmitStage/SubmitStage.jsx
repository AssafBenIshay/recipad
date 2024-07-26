import React from "react";
import './SubmitStage.css'
import whitePlus from '../../../../assets/whitePlus.png'

export default function SubmitStage({ recipe, setRecipe, name, recipeCategory, type, timer,
    amount, comments, image, rLink, setAddRecipeBtn ,setAnnounce ,setIsStages}) {
    
    
    
    function handleClick() {
        let timeStamp = new Date().toISOString()

        const newRecipe = 
        {
            "id":`${timeStamp}`,
            "name":`${name}`,
            "isFavorite":`${false}`,
            "category":`${recipeCategory}`,
            "type":`${type}`,
            "time":`${timer}`,
            "amount":`${amount}`,
            "comments":`${comments}`,
            "image":`${image}`,
            "link":`${rLink}`
        }
        setRecipe(newRecipe)
            fetch(import.meta.env.VITE_API_R, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRecipe)
            })
                .then((response) => {
                    setAnnounce('יצרת מתכון חדש!! בישול נעים.')
                    let stages = document.getElementById('stages')
                    try {
                        let stagesParent = stages.parentElement
                        stagesParent.removeChild(stages)

                    } catch (error) {
                        error
                    }
                    
                    
                });
        
        setAddRecipeBtn(whitePlus)
        setIsStages(false)
    }
    
    

    return (
        <div className='submit-container'>
            
            <h1> סיימת לשמור מתכון חדש! 🍽 </h1>
            <div className='div-line'><p> המתכון החדש שלך אוטוטו בערימת המתכונים שלך!</p>
            <button onClick={handleClick}> לשמור </button></div>
        </div>
    )
};

