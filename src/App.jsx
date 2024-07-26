import React from 'react'
import './App.css'
import AppBar from './components/AppBar/AppBar'
import Stages from './components/Stages/Stages'
import imagePlaceholder from './assets/imagePlaceholder.png'
import Toast from './components/Notifications/Toast'
import whitePencil from './assets/pencilWhite.png'


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
  const [isStages,setIsStages] = React.useState(false)


  
  React.useEffect(() => {
    // this function fills the dropdown with categories from the DB
    var categoriesList = []
    const get = async () => {
      let url = import.meta.env.VITE_API
      const response = await fetch(url)
      const rawData = await response.json()
      const res = Array.from(rawData)
      res.forEach((category) => {
        categoriesList.push(category.name)
      })
    setCategories(categoriesList) 
    }
    get()
  
  }, [])
  

  return (
    <div className='App'>
      {announce && <Toast announce={announce} />}
      <AppBar
        addRecipeBtn={addRecipeBtn}
        setAddRecipeBtn={setAddRecipeBtn}
        setIsStages={setIsStages}
        isStages={isStages}
      />
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
