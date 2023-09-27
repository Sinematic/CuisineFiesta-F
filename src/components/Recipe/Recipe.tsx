import { Recipe as RecipeInterface } from "../../interfaces/Recipe"
import DefaultImage from "../../assets/images/pains-aux-graines.webp"
import "../../styles/Recipe/Recipe.css"

function Recipe(props : { content: RecipeInterface }) {

    const { content } = props

    console.log(content)

    return (
        <>
        {content && content.title !== null ? 
            <div className="recipe-item">
                <h2>{content.title}</h2>
                <img src={content.images.length > 0 ? content.images[0] : DefaultImage} alt="" />
            </div> 
        : null}
        </>
        
    )
}

export default Recipe