import './Recipe.css'
import React from 'react'
import whiteHeart from '../../../assets/heartOutline.png'
import favHeart from '../../../assets/heart.png'
import painter from './painter'
import edit from '../../../assets/pencilWhite.png'
import app from '../../../firebaseConfig'
import { getDatabase,ref,set,get,push,remove,update} from 'firebase/database'


export default function Recipe({ recipeView,setRecipeViewWindow}) {
    const [rgb, setRgb] = React.useState([])
    const [fav, setFav] = React.useState(recipeView.isFavorite)
    const [id, setId] = React.useState(recipeView.id)
    const [favKey,setFavKey] = React.useState('')

    const heartButtonImage = React.useRef(document.getElementById('favHeart'))

    // React.useEffect(() => {

    //     console.log('recipeView.isFavorite :>> ', recipeView.isFavorite);
    //     const url = `${import.meta.env.VITE_API_R}/${recipeView.id}` 

    //     const fetchView = async () =>{
    //         try {
    //             const resIsFav = await fetch(url)
    //             const dataIsFav = await resIsFav.json()

    //             if (!resIsFav.ok) {
    //                 console.log('dataIsFav.description :>> ', dataIsFav.description);
    //                 return
    //             } else {
    //                 const isFav = dataIsFav.isFavorite;
    //                 setFav(isFav)
    //             }

    //         } catch (error) {
    //             console.log('error isFav:>> ', error);
    //         }
        

    //     try {
    //         const res = await fetch(url, {
    //             method: 'PATCH',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ 'isFavorite': fav })
    //         })
    //         const data = await res.json()
            
    //         if (!res.ok) {
    //             console.log(data.description);
    //             return
    //         }
            
    //     } catch (error) {
    //         console.log('error :>> ', error);
    //     }}

    //     fetchView()
    // },[])

    
    // const toggleFav = async (e) => {

    //     const url = `${import.meta.env.VITE_API_R}/${recipeView.id}`
        
    //     //~ finding the correct view by ID
    //     try {
    //         const resIsFav = await fetch(url)
    //         const dataIsFav = await resIsFav.json()

    //         if (!resIsFav.ok) {
    //             console.log('dataIsFav.description :>> ', dataIsFav.description);
    //             return
    //         } else {
    //             const isFav = !dataIsFav.isFavorite;
    //             setFav(isFav)
    //             console.log('isFav toggleFav :>> ', isFav);

    //         }

    //     } catch (error) {
    //         console.log('error isFav:>> ', error);
    //     }
        
        
    //     try {
    //         //console.log('e.target:', e.target.src, (!e.target.src.includes('Outline')), '   fav: ', fav, ', recipeView :', recipeView.isFavorite);

    //         if ((!e.target.src.includes('Outline')) && fav && recipeView.isFavorite) {

    //             const res = await fetch(url, {
    //                 method: 'PATCH',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify({ 'isFavorite': false })
    //             })

    //             const data = await res.json()
                
    //             if (!res.ok) {
    //                 console.log(data.description);
    //                 return
    //         } else {
    //             let tRgb = painter()
    //             setRgb(tRgb)
                
    //             // if (!e.target.src.includes('Outline') && fav && recipeView.isFavorite) {
                    
    //             // }
    //         }
    //         } else {
    //             const res = await fetch(url, {
    //                 method: 'PATCH',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify({ 'isFavorite': true })
    //             })
    //             const data = await res.json()
    //             if (!res.ok) {
    //             console.log(data.description);
    //             return
    //         } else {
    //             let tRgb = painter()
    //             setRgb(tRgb)
                
    //             // if (!e.target.src.includes('Outline') && fav && recipeView.isFavorite) {
                    
    //             // }
    //         }
    //         }
    //     } catch (error) {
    //         console.log('error :>> ', error);
    //     }
        
    // }
    

    React.useEffect(() => {
        let tRgb = painter()
        setRgb(tRgb)
        if (heartButtonImage.current.src.includes('Outline')) {
            setFav(false)
        } else {
            setFav(true)
        }


    }, [])

    function editRecipe() {
        setRecipeViewWindow(id)
    }

    function toggleFav(e) {

        const searchFav = async () => {
            const db = getDatabase(app)
            const favDBRef = ref(db, 'recipes/')
            const snapshot = await get(favDBRef)
            if (snapshot.exists) {
                let receivedRecipeArray = Object.values(snapshot.val())
                let receivedRecipeKeys = Object.keys(snapshot.val())

                for (let i = 0; i < receivedRecipeKeys.length; i++){
                    try {
                        if (receivedRecipeArray[i].id === id) {
                            setFavKey(receivedRecipeKeys[i])
                            const db = getDatabase(app)
                            const dataRef = ref(db, '/recipes/' + receivedRecipeKeys[i])

            var updatedFav = {
                amount: recipeView.amount,
                category: recipeView.category,
                comments: recipeView.comments,
                id: recipeView.id,
                image: recipeView.image,
                isFavorite: !fav,
                link: recipeView.link,
                name: recipeView.name,
                time: recipeView.time,
                type: recipeView.type

            }
            await update(dataRef, updatedFav)
            window.location.reload()
                    }
                    } catch (error) {
                        console.log('receivedRecipeArray[i].id === recipeView.id didnt pass');
                        
                    }
                    
                }
            }
        }



        // const updateFav = async () => {
                
        //         const db = getDatabase(app)
        //         const newUpdateRef = ref(db, 'recipes/' + receivedRecipeKey).

        //     console.log('newUpdateRef :>> ', newUpdateRef.toJSON());

        //         await set(newUpdateRef, {
        //             amount: recipeView.amount,
        //             category: recipeView.category,
        //             comments: recipeView.comments,
        //             id: recipeView.id,
        //             image: recipeView.image,
        //             isFavorite: !fav,
        //             link: recipeView.link,
        //             name: recipeView.name,
        //             time: recipeView.time,
        //             type: recipeView.type
        //         })//.then(window.location.reload()))
        // }
        // searchFav()
        
        searchFav()

        
        
    }

    
    return (
        <div className='recipe-view' key={recipeView.id} style=
            {{ backgroundColor: `rgba(${rgb[0] - 50},${rgb[1] - 50},${rgb[2]},0.52)` }}
            id={recipeView.id}    
        >
            <h3 > {recipeView.name} </h3>
            <img src={recipeView.image} className='minimized-view-img' />
            <img ref={heartButtonImage}
                src={fav ? favHeart : whiteHeart}
                className='heart-position'
                onClick={(e) => toggleFav(e)}
                id='favHeart' /> 
            <img src={edit} className='pencil-position' onClick={editRecipe}/>
            <div className='category' >
                <h6>{ recipeView.category}</h6>
            </div>
        </div>
    )
}