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



export default function AppBar({ addRecipeBtn, setAddRecipeBtn, setIsStages, isStages, setShowFav ,setSearchWord}) {
    const [trueHeart, setTrueHeart] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('')
    const inputRef = React.useRef('')

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

    function showFavorites() {
        setShowFav(last => !last)
        setTrueHeart(last => !last)
    }

    function handleSearch() {
        setSearchWord(searchValue)
        console.log('searchValue :>> ', searchValue);
        inputRef.current.value = ''
    }

    return (
        <div className='app-bar'>
           
            <div className='action'>
                <button className='plus-btn'><img src={addRecipeBtn} alt='a recipe is currentlly being edited' onClick={handleClick} /></button>
                <input
                    type='text'
                    className='search'
                    id='search'
                    onChange={(e) => setSearchValue(e.target.value)}
                    ref={inputRef} 
                    ></input>
                <img src={magnifyingWhite} alt='search' onClick={handleSearch}></img>
            </div>
            <div className='title'>
                <h1>המתכונים שלי</h1>
                <img src={trueHeart?whiteHeart:favHeart} alt='show only all favorite recipes' onClick={showFavorites} />
            </div>
        </div>
    )
}