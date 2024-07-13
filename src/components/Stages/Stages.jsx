import Stage0 from './NewRecipeStages/Stage0/Stage0'
import NameStage from './NewRecipeStages/NameStage/NameStage'
import CategoryStage from './NewRecipeStages/CategoryStage/CategoryStage'
import React from 'react'
import TypeStage from './NewRecipeStages/TypeStage/TypeStage'
import TimeStage from './NewRecipeStages/TimeStage/TimeStage'

export default function Stages({ setName, name, categories, setCategories, recipeCategory,
    setRecipeCategory, type, setType, timer, setTimer }) {
    
    const [stage, setStage] = React.useState(0)

    return (
        <>
            <Stage0 setStage={ setStage } stage={stage}/>
            {stage >= 1 && <NameStage
                setStage={setStage}
                setName={setName}
                name={name}
                stage={stage} />}
            {stage >= 2 && <CategoryStage
                stage={stage}
                setStage={setStage}
                categories={categories}
                setCategories={setCategories}
                recipeCategory={recipeCategory}
                setRecipeCategory={setRecipeCategory}
            />}
            {stage >= 3 && <TypeStage 
                stage={stage}
                setStage={setStage}
                type={type}
                setType={setType}
            />}
            {stage >= 4 && <TimeStage 
                stage={stage}
                setStage={setStage}
                timer={timer}
                setTimer={setTimer}
            />}
            
        </>
    )
}