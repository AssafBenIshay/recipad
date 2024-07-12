import React from 'react'
import InputField from '../../InputField'
import './CategoryStage.css'
import InputDropdown from '../../InputDropdown'

export default function CategoryStage({ setStage, categories, setCategories }) {

    const [valC,setValC] = React.useState("") //val is set inside the dropdown component
    const [valI,setValI] = React.useState("") //val is set inside the input component

    function handleClick() {
        if (valC) { //if the 
            setCategories(valC)
        }
    }
    return (
        <div className='category-container'>
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
        </div>
    )
}