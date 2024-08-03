import React from 'react'
import './Stages.css'
import Stage0 from './NewRecipeStages/Stage0/Stage0'
import NameStage from './NewRecipeStages/NameStage/NameStage'
import CategoryStage from './NewRecipeStages/CategoryStage/CategoryStage'
import TypeStage from './NewRecipeStages/TypeStage/TypeStage'
import TimeStage from './NewRecipeStages/TimeStage/TimeStage'
import AmountStage from './NewRecipeStages/AmountStage/AmountStage'
import CommentsStage from './NewRecipeStages/CommentsStage/CommentsStage'
import ImageStage from './NewRecipeStages/ImageStage/ImageStage'
import LinkStage from './NewRecipeStages/LinkStage/LinkStage'
import SubmitStage from './NewRecipeStages/SubmitStage/SubmitStage'

export default function Stages({ setName, name, categories, setCategories, recipeCategory, setRecipeCategory,
    type, setType, timer, setTimer, amount, setAmount, comments, setComments, image, setImage, rLink, setRLink,
    recipe, setRecipe, addRecipeBtn, setAddRecipeBtn,setAnnounce,setIsStages}) {
    
    const [stage, setStage] = React.useState(0)

    return (
        <div id='stages'>
            <Stage0 setStage={setStage} stage={stage} />
            <div className='lego'>
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
                setAnnounce={setAnnounce}    
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
            {stage >= 5 && <AmountStage 
                stage={stage}
                setStage={setStage}   
                amount={amount}  
                setAmount={setAmount}    
            />}
            {stage >= 6 && <CommentsStage 
                stage={stage}
                setStage={setStage}
                comments={comments}
                setComments={setComments}
            />}
            {stage >= 7 && <ImageStage 
                stage={stage}
                setStage={setStage}
                image={image}
                setImage={setImage}    
            />}
            {stage >= 8 && <LinkStage 
                stage={stage}
                setStage={setStage}
                rLink={rLink}
                setRLink={setRLink}    
            />} 
            {stage >= 9 && <SubmitStage 
                setRecipe={setRecipe}
                name={name}    
                recipeCategory={recipeCategory}    
                type={type}
                timer={timer}
                amount={amount}
                comments={comments}
                image={image}
                rLink={rLink}
                setAddRecipeBtn={setAddRecipeBtn}
                setAnnounce={setAnnounce}
                setIsStages={setIsStages}    
            />}
                    
                           
            </div>
        </div>
    )
}