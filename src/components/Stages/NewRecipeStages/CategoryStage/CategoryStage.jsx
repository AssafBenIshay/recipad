import React from 'react'
import InputField from '../../InputField'
import './CategoryStage.css'
import InputDropdown from '../../InputDropdown'
import CategoryStageComplete from './CategoryStageComplete/CategoryStageComplete'
import Stages from '../../Stages'

export default function CategoryStage({ stage,setStage, categories, setCategories, recipeCategory, setRecipeCategory }) {

    const [valC, setValC] = React.useState("") //val is set inside the dropdown component
    const [valI, setValI] = React.useState("") //val is set inside the input component

    function handleClick() {
        var h4arr = Array.from(document.getElementsByTagName('h4'))

        if (valC) {
            setRecipeCategory(valC)
            setStage(3)
        } else if (valI) {
            setRecipeCategory(valI)
            setStage(3)

        } else {
            h4arr.map((element) => {
            element.style.color = '#af2211'
            });

        }
    }
    return (
    <>
            {stage === 2?
                <div className='category-container' >
                    <h2 className='category-title'>שלב שני : </h2>
                    <div className='category-sub-container'>
                    <h4 className=''>בבקשה הכניסי את המתכון לקטגוריה</h4>
                    <InputDropdown setValC={setValC} categories={categories}/>
                </div>
                <div className='category-sub-container'>        
                    <h4 className=''>או שתצרי קטגוריה חדשה פה:</h4>
                    <InputField setValI={setValI} />
                    <h4 className=''>ואז לחצי פה כדי :</h4>
                    <button onClick={handleClick}>לעבור לשלב הבא</button></div>  
                </div> :
                <CategoryStageComplete recipeCategory={recipeCategory}/>
            }
        </>
    )
}