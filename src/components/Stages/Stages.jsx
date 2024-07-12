import Stage0 from './NewRecipeStages/Stage0/Stage0'
import NameStage from './NewRecipeStages/NameStage/NameStage'
import CategoryStage from './NewRecipeStages/CategoryStage/CategoryStage'
import React from 'react'

export default function Stages({setName,name,categories,setCategories}) {
    const [stage, setStage] = React.useState(0)

    return (
        <>
            <Stage0 setStage={ setStage } stage={stage}/>
            {stage >= 1 && <NameStage setStage={setStage} setName={setName} name={name} stage={ stage} />}
            {stage >= 2 && <CategoryStage setStage={setStage} categories={categories} setCategories={setCategories} />}
            
        </>
    )
}