import React from 'react'
import './App.css'
import AppBar from './components/AppBar/AppBar'
import Stages from './components/Stages/Stages'
import imagePlaceholder from './assets/imagePlaceholder.png'
import Toast from './components/Notifications/Toast'
import whitePencil from './assets/pencilWhite.png'
import RecipesView from './components/RecipesLoader/RecipesView'
import RecipeEdit from './components/RecipeEdit/RecipeEdit'
import app from './firebaseConfig'
import { getDatabase,ref,set,get,push,remove} from 'firebase/database'

function App() {
  const [categories, setCategories] = React.useState([])//list of categories from the db
  const [name, setName] = React.useState('') //propDrill Stages=>NameStage
  const [recipeCategory, setRecipeCategory] = React.useState('')
  const [type,setType] = React.useState('לא מוגדר')
  const [timer, setTimer] = React.useState('לא מוגדר')
  const [amount, setAmount] = React.useState('לא מוגדר')
  const [comments, setComments] = React.useState('אין הערות')
  const [image, setImage] = React.useState(imagePlaceholder)
  const [rLink, setRLink] = React.useState('')
  const [recipe, setRecipe] = React.useState({})
  const [addRecipeBtn, setAddRecipeBtn] = React.useState()
  const [announce, setAnnounce] = React.useState('')
  const [isStages, setIsStages] = React.useState(false)
  const [recipeViewWindow, setRecipeViewWindow] = React.useState(null)
  const [showFav, setShowFav] = React.useState(false)
  const [searchWord, setSearchWord] = React.useState('')
  let [cArray,setCArray] = React.useState([])


  
  React.useEffect(() => {
    // this function fills the dropdown with categories from the DB
    var categoriesList = []
    // const get = async () => {
    //   let url = import.meta.env.VITE_API
    //   const response = await fetch(url)
    //   const rawData = await response.json()
    //   const res = Array.from(rawData)
    //   res.forEach((category) => {
    //     categoriesList.push(category.name)
    //   })
    // setCategories(categoriesList) 
    // }
    // get()
    // Write()
    // Read()
    // UpdateRead()
    const fetchData = async () => {
      const db = getDatabase(app)
      const dbRef = ref(db,'categories')
      const snapshot = await get(dbRef)
      
      if (snapshot.exists()) {
        setCArray(Object.values(snapshot.val()))
        cArray.forEach((category) => {
          categoriesList.push(category.name)
        })
        setCategories(categoriesList)
      } else {
        alert(snapshot.toJSON())
      }
    }
    fetchData()
  }, [])

  // //! -------------------- Save Data To FIREBASE -----------------//
  // function Write() {
    
  //   const saveData = async () => {
  //     const db = getDatabase(app)
  //     const newDocRef = push(ref(db, 'recipes/categries/'))
  //     set(newDocRef, {
  //         id: "2024-07-26T07:54:11.530Z",
  //         name: "עיקרית"
  //     }).then(() => {
  //       alert('data saved to firebase')
  //     }).catch((error) => {
  //       alert("roorr :",error.message)
  //     })

  //   }
  //   saveData()
  // }
  
  // //* ------------- עובד!!!!!!!!!!!!!! ----------------------//
  // //! -------------------- Save Data To FIREBASE -----------------//

  // //^ ----------------------Read Data From FIREBASE --------------//
  // function Read() {
  //   const fetchData = async () => {
  //     const db = getDatabase(app)
  //     const dbRef = ref(db,'recipes/categries/')
  //     const snapshot = await get(dbRef)
      
  //     if (snapshot.exists()) {
  //       setCArray(Object.values(snapshot.val()))
  //     } else {
  //       alert(snapshot.toJSON())
  //     }
  //   }
  //   fetchData()
  // }
  // //* ---------------------עובד!!!!!!!!!!!!!!!  ------------------//
  // //^ ----------------------Read Data From FIREBASE --------------//

  // //~ ---------------------Before Update Read Data From FIREBASE----------------//
  // function UpdateRead() {
  //   const fetchData = async () => {
  //     const db = getDatabase(app)
  //     const dbRef = ref(db, 'recipes/categries/')
  //     const snapshot = await get(dbRef)
  //     console.log('snapshot :>> ', snapshot.exists());
  //     if (snapshot.exists()) {
  //       const myData = snapshot.val()
  //       const tempArray = Object.keys(myData).map(myFireId => {
  //         return {
  //           ...myData[myFireId],
  //           fruitId:myFireId
  //         }
  //       })

  //       setCArray(tempArray)
  //     } else {
  //       alert(console.error)
  //     }
  //   }
  //   fetchData()
  //   }
  //  //* -------------------------------עובד----------------------- 
  // //~ ---------------------Before Update Read Data From FIREBASE----------------//

  // //& -------------------- Update Write Data in FIREBASE -----------//
  //     function UpdateWrite() {
    
  //   const fetchData = async () => {
  //     const db = getDatabase(app)
  //     const newDocRef = push(ref(db, 'recipes/categries/'+id))
  //     set(newDocRef, {
  //         id: "2024-07-26T07:54:11.530Z",
  //         name: "עיקרית"
  //     }).then(() => {
  //       alert('data saved to firebase')
  //     }).catch((error) => {
  //       alert("roorr :",error.message)
  //     })

  //   }
  //   saveData()
  // }

  // //& -------------------- Update Write Data in FIREBASE -----------//
  // //^ --------------------  Delete Data in FIREBASE -----------//
  // const deleteRecipe = async (recipeId) => {
  //   const db = getDatabase(app)
  //   const dbRef = ref(db, 'recipes/categries/' + recipeId)
    
  //   await remove(dbRef)
  //   window.location.reload()
  //   }
  // //^ --------------------  Delete Data in FIREBASE -----------//


  

  return (
    <div className='App'>
      {announce.length > 0 ?  <Toast announce={announce} setAnnounce={ setAnnounce} />:''}
      <AppBar
        addRecipeBtn={addRecipeBtn}
        setAddRecipeBtn={setAddRecipeBtn}
        setIsStages={setIsStages}
        isStages={isStages}
        setShowFav={setShowFav}
        setSearchWord={setSearchWord}
      />
      {/* {cArray.map((cat) => (
        <h1 key={crypto.randomUUID()}> {Object.values(cat.name)}</h1>
      ))} */}
      {recipeViewWindow ?
        <RecipeEdit
          recipeViewWindow={recipeViewWindow}
          setRecipeViewWindow={setRecipeViewWindow}
          setAnnounce={setAnnounce} 
          /> :
        <RecipesView
          setRecipeViewWindow={setRecipeViewWindow}
          showFav={showFav}
          searchWord={searchWord} 
          setAnnounce={setAnnounce}
          />}
      {isStages && <Stages
        setAddRecipeBtn={setAddRecipeBtn}
        setName={setName}
        name={name}
        categories={categories}
        setCategories={setCategories}
        recipeCategory={recipeCategory}
        setRecipeCategory={setRecipeCategory}
        type={type}
        setType={setType}
        timer={timer}
        setTimer={setTimer}
        amount={amount}
        setAmount={setAmount}
        comments={comments}
        setComments={setComments}
        image={image}
        setImage={setImage}
        rLink={rLink}
        setRLink={setRLink}
        recipe={recipe}
        setRecipe={setRecipe}
        setAnnounce={setAnnounce}
        setIsStages={setIsStages}
      />}

    </div>
  )
}

export default App
