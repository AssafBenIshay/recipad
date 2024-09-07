import React from 'react'
import InputField from '../../inputComponents/InputField'
import './CategoryStage.css'
import InputDropdown from '../../inputComponents/InputDropdown'
import CategoryStageComplete from './CategoryStageComplete/CategoryStageComplete'
import Stages from '../../Stages'
import app from '../../../../firebaseConfig'
import { getDatabase,ref,set,get,push,remove} from 'firebase/database'


export default function CategoryStage({ stage, setStage, categories, setCategories, recipeCategory, setRecipeCategory, setAnnounce }) {

    const [valC, setValC] = React.useState("") //val is set inside the dropdown component
    const [valI, setValI] = React.useState("") //val is set inside the input component
    const [categoriesList, setCategoriesList] = React.useState([])
    const [cl,setCl] = React.useState([])    
    // React.useEffect(() => {
        // },[])
        // const getCategoriesFromDb = async () => {
        //     let url = import.meta.env.VITE_API
        //     const response = await fetch(url)
        //     const rawData = await response.json()
        //     const res = Array.from(rawData)
        //     const arry = []
        //     res.forEach((category) => {
        //         arry.push(category.name)
        //     })
        //     setCategoriesList(arry)
        // }
    // getCategoriesFromDb()
    
    // const fetchCategories = async () => {
    //     const db = getDatabase(app)
    //     const dbRef = ref(db, '/recipes')
    //     const snapshot = await get(dbRef)
    //     if (snapshot.exists()) {
    //         let arr = Object.values(snapshot.val())
    //         //*console.log('arr :>> ', (arr));
            
    //         arr.forEach(element => {
    //             console.log('element :>> ', element.category);
    //             setCl(cl => cl, element.category)
    //             console.log('cl :>> ', cl);
    //         });
    //         setCategoriesList(cl)
    //     } else {
    //         alert(snapshot.toJSON())
    //     }  //   fetchData()
    // }
    
    
    
    
    
    function handleClick() {
        var h4arr = Array.from(document.getElementsByTagName('h4'))
        
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        
        
        if (valC && !valI) {
            setRecipeCategory(valC)
            setStage(3)
        } else if (valI) {
            
            if (categoriesList.includes(valI) ) {
                setAnnounce(`תקלה, הקטגוריה ${valI} כבר קיימת.`)
                setStage(1)
            } else {
                setRecipeCategory(valI)
                setStage(3)
                    }
                    
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