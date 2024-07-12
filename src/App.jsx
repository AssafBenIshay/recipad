import React from 'react'
import './App.css'
import AppBar from './components/AppBar/AppBar'
import Stages from './components/Stages/Stages'

function App() {
  const [categories, setCategories] = React.useState([])
  const [name,setName] = React.useState('') //propDrill Stages=>NameStage
  
  
  React.useEffect(() => {
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
  console.log('categories APP:>> ', categories);
  

  return (
    <div className='App'>
      <AppBar />
      
      <Stages
        setName={setName}
        name={name}
        categories={categories}
        setCategories={setCategories}

      />
    </div>
  )
}

export default App
