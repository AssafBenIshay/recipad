import React from 'react'
import whitePlus45deg from '../../assets/whitePlus.png'
import whiteHeart from '../../assets/heartOutline.png'
import favHeart from '../../assets/heart.png'
import trashBin from '../../assets/trash.png'
import DeleteApprovePopup from './DeleteApprovePopup'

import './RecipeEdit.css'

export default function RecipeEdit({ recipeViewWindow, setRecipeViewWindow, setAnnounce}) {
    const [recipeData, setRecipeData] = React.useState({})
    const [imageLoaded, setImageLoaded] = React.useState(false)
    const [answer, setAnswer] = React.useState(false)
    const [deleteClicked, setDeleteClicked] = React.useState(false)
    
    
    React.useEffect(() => {
        async function fetchEditRecipe() {
            const response = await fetch(
                `${import.meta.env.VITE_API_R}/${recipeViewWindow}`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }
            )

            const jsonRecipeByID = await response.json()
            if (response.ok) {
                setRecipeData(jsonRecipeByID)
            }
            else {
                console.log('object :>> ', Error);
            }
        }
        fetchEditRecipe()
    }, [])

    React.useEffect(() => {
        const imge = new Image()
        imge.onLoad = () => {
            setImageLoaded(true)
        }
        imge.src = recipeData.image
        
    }, [recipeData.image])
    
    function handleClick() {
        setRecipeViewWindow('')
    }

    function handleDelete() {
        setDeleteClicked(true)

    }

    React.useEffect(() => {
        
        if (answer) {
            const clickHandler = async () => {
                try {
                    const res = await fetch(`${import.meta.env.VITE_API_R}/${recipeViewWindow}`, {
                        method: 'DELETE',
                    })

                    const data = await res.json()

                    if (!res.ok) {
                        console.log(data.description)
                        return
                    } else {
                        setAnnounce(`המתכון ${recipeData.name} הוסר בהצלחה`)
                        setTimeout(() => {
                            setRecipeViewWindow('')
                        }, 1000);
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            clickHandler()
        }

    })

    return (
        <div>
            {deleteClicked ? <DeleteApprovePopup
                recipeName={recipeData.name}
                setAnswer={setAnswer}
                setDeleteClicked={setDeleteClicked}
                /> :
                <div className='recipe-edit'  >
                    <img
                        src={whitePlus45deg}
                        className='plus-45deg'
                        onClick={handleClick}
                        alt='click to close recipe editing window' />
                    <img
                        src={trashBin}
                        className='trash'
                        alt='click to delete this recipe from the database'
                        onClick={handleDelete} />

                    <img
                        src={recipeData.isFavorite ? favHeart : whiteHeart}
                        className='fav-indicator' alt='click to add this recipe to your Favourits' />
                    <h1 > {recipeData.name} </h1>
                    <div className='divider'>
                        <div className='image-div'>
                            <img src={recipeData.image} />
                        </div>
                        <div className='info-div'>
                            <h3 >קטגוריה :
                                <span
                                    className='not-title'
                            
                                >{recipeData.category}{' '}{recipeData.type}</span></h3>
                            {recipeData.time === 'לא מוגדר' ? "" : <h3>זמן הכנה : <span className='not-title' >{recipeData.time}</span></h3>}
                            {recipeData.amount === 'לא מוגדר' ? "" : <h3>מספר המנות : <span className='not-title' >{recipeData.amount}</span></h3>}
                            <h3>הערות :</h3>
                            <p >{recipeData.comments}</p>
                    
                        </div>
                    </div>
                    <a href={recipeData.link} target='_blank' rel='noreferrer' className='href'>לחצי כאן כדי לעבור לאתר</a>

                </div>}</div>
    

    )
}
