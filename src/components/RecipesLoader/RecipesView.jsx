import React from 'react'
import './RecipesView.css'
import whiteHeart from '../../assets/heartOutline.png'
import favHeart from '../../assets/heart.png'
import Recipe from './Recipe/Recipe'

export default function RecipesView({setRecipeViewWindow,showFav,searchWord,setAnnounce}) {
    const [recipesViewList, setRecipesViewList] = React.useState([])


    React.useEffect(()=>{
        async function fetchRecipes() {
            const response = await fetch(
                import.meta.env.VITE_API_R, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }
            )

            const jsonDBdata = await response.json()
            const data = Array.from(jsonDBdata)

            if (showFav === true) {
                const filteredViews = data.filter(recipe => recipe.isFavorite === true)
                const views = filteredViews.map(recipeView =>(<Recipe
                    recipeView={recipeView}
                    key={crypto.randomUUID()}
                    setRecipeViewWindow={setRecipeViewWindow} />))
    
                setRecipesViewList(views) 
                
            } else if(searchWord.length > 0){
                const filteredViews = data.filter(recipe => JSON.stringify(recipe).includes(searchWord))
                if (filteredViews.length > 0) {
                    const views = filteredViews.map(recipeView =>(<Recipe
                    recipeView={recipeView}
                    key={crypto.randomUUID()}
                    setRecipeViewWindow={setRecipeViewWindow} />))
    
                setRecipesViewList(views) 
                } else {
                    setAnnounce(`לא נמצא הביטוי ${searchWord} בתוך אחד מהמתכונים שלך`)

                    const views = data.map(recipeView => (<Recipe
                    recipeView={recipeView}
                    key={crypto.randomUUID()}
                    setRecipeViewWindow={setRecipeViewWindow} />))
    
                setRecipesViewList(views)
                }
                
            }else{
                
                const views = data.map(recipeView => (<Recipe
                    recipeView={recipeView}
                    key={crypto.randomUUID()}
                    setRecipeViewWindow={setRecipeViewWindow} />))
    
                setRecipesViewList(views)
            }
            
        }
        fetchRecipes()
    }, [showFav,searchWord])
    
    
    return (
        <div className='recipes-views'>
            {recipesViewList}
        </div>
    )
}