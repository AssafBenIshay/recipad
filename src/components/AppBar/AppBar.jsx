import './AppBar.css'
import React from 'react'
import blackHeart from '../../assets/heartOutlineBlack.png'
import whiteHeart from '../../assets/heartOutline.png'
import favHeart from '../../assets/heart.png'
import whitePlus from '../../assets/whitePlus.png'
import blackPlus from '../../assets/blackPlus.png'
import magnifyingBlack from '../../assets/magnifyingBlack.png'
import magnifyingWhite from '../../assets/magnifyingWhite.png'
import blackPencil from '../../assets/pencilBlack.png'
import whitePencil from '../../assets/pencilWhite.png'



export default function AppBar({ addRecipeBtn, setAddRecipeBtn ,setIsStages ,isStages}) {

    React.useEffect(() => {
        setAddRecipeBtn(whitePlus) 
        setIsStages(false)
    },[])
    
    function handleClick() {
        if (isStages === true) { //
            setAddRecipeBtn( whitePlus )
            setIsStages(false)
        } else {
            setAddRecipeBtn( whitePencil )
            setIsStages(true)
        }
    }

    return (
        <div className='app-bar'>
           
            <div className='action'>
                <button className='plus-btn'><img src={addRecipeBtn} alt='a recipe is currentlly being edited' onClick={handleClick} /></button>
                <input type='text' className='search'></input>
                <img src={magnifyingWhite} alt='search'></img>
            </div>
            <div className='title'>
                <h1>המתכונים שלי</h1>
                <img src={whiteHeart} alt='heart' />
            </div>
        </div>
    )
}