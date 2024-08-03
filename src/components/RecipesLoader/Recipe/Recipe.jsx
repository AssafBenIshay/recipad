import './Recipe.css'
import React from 'react'
import whiteHeart from '../../../assets/heartOutline.png'
import favHeart from '../../../assets/heart.png'
import painter from './painter'
import edit from '../../../assets/pencilWhite.png'

export default function Recipe({ recipeView,setRecipeViewWindow}) {
    const [rgb, setRgb] = React.useState([])
    const [fav, setFav] = React.useState(recipeView.isFavorite)

    React.useEffect(() => {
        
        const url = `${import.meta.env.VITE_API_R}/${recipeView.id}` 

        const fetchView = async () =>{
            try {
                const resIsFav = await fetch(url)
                const dataIsFav = await resIsFav.json()

                if (!resIsFav.ok) {
                    console.log('dataIsFav.description :>> ', dataIsFav.description);
                    return
                } else {
                    const isFav = dataIsFav.isFavorite;
                    setFav(isFav)
                }

            } catch (error) {
                console.log('error isFav:>> ', error);
            }
        

        try {
            const res = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'isFavorite': fav })
            })
            const data = await res.json()
            
            if (!res.ok) {
                console.log(data.description);
                return
            }
            
        } catch (error) {
            console.log('error :>> ', error);
        }}

        fetchView()
    },[])

    
    const toggleFav = async (e) => {

        const url = `${import.meta.env.VITE_API_R}/${recipeView.id}`
        
        //~ finding the correct view by ID
        try {
            const resIsFav = await fetch(url)
            const dataIsFav = await resIsFav.json()

            if (!resIsFav.ok) {
                console.log('dataIsFav.description :>> ', dataIsFav.description);
                return
            } else {
                const isFav = !dataIsFav.isFavorite;
                setFav(isFav)
                console.log('isFav toggleFav :>> ', isFav);

            }

        } catch (error) {
            console.log('error isFav:>> ', error);
        }
        
        
        try {
            //console.log('e.target:', e.target.src, (!e.target.src.includes('Outline')), '   fav: ', fav, ', recipeView :', recipeView.isFavorite);

            if ((!e.target.src.includes('Outline')) && fav && recipeView.isFavorite) {

                const res = await fetch(url, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 'isFavorite': false })
                })

                const data = await res.json()
                
                if (!res.ok) {
                    console.log(data.description);
                    return
            } else {
                let tRgb = painter()
                setRgb(tRgb)
                
                // if (!e.target.src.includes('Outline') && fav && recipeView.isFavorite) {
                    
                // }
            }
            } else {
                const res = await fetch(url, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 'isFavorite': true })
                })
                const data = await res.json()
                if (!res.ok) {
                console.log(data.description);
                return
            } else {
                let tRgb = painter()
                setRgb(tRgb)
                
                // if (!e.target.src.includes('Outline') && fav && recipeView.isFavorite) {
                    
                // }
            }
            }
        } catch (error) {
            console.log('error :>> ', error);
        }
        
    }
    

    React.useEffect(() => {
        let tRgb = painter()
        setRgb(tRgb)
    }, [])

    function editRecipe() {
        setRecipeViewWindow(recipeView.id)
    }

    
    return (
        <div className='recipe-view' key={crypto.randomUUID()} style=
            {{ backgroundColor: `rgba(${rgb[0] - 50},${rgb[1] - 50},${rgb[2]},0.52)` }}
            >
            <h3 > {recipeView.name} </h3>
            <img src={recipeView.image} className='minimized-view-img' />
            <img src={fav ? favHeart : whiteHeart} className='heart-position' onClick={(e) => toggleFav(e)} /> 
            <img src={edit} className='pencil-position' onClick={editRecipe}/>
            <div className='category' >
                <h6>{ recipeView.category}</h6>
            </div>
        </div>
    )
}