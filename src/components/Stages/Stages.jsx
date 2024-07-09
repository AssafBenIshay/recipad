import Stage0 from './NewRecipeStages/Stage0'
import NameStage from './NewRecipeStages/NameStage'
import React from 'react'

export default function Stages() {
    const [stage, setStage] = React.useState(0)

    return (
        <>
            <Stage0 setStage={ setStage } />
            {stage === 1 && <NameStage setStage={setStage} />}
        </>
    )
}