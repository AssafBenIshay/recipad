import './CategoryStageComplete.css'

export default function CategoryStageComplete({recipeCategory}) {
    return (
        <div className='category-stage-complete'>
            <h2 className='name-title'>קטגוריה :</h2>
            <h1 className=''>{recipeCategory }</h1>
        </div> 
    )
}