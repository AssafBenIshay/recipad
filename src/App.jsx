import React from 'react'
import './App.css'
import AppBar from './components/AppBar/AppBar'
import Stages from './components/Stages/Stages'

function App() {
  const [categories, setCategories] = React.useState([])//list of categories from the db
  const [name, setName] = React.useState('') //propDrill Stages=>NameStage
  const [recipeCategory, setRecipeCategory] = React.useState('')
  const [type,setType] = React.useState('')
  const [timer,setTimer] = React.useState('')
  
  
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
      <AppBar />
      
      <Stages
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
      />
    </div>
  )
}

export default App
