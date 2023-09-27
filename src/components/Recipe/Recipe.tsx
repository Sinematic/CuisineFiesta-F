import { Recipe as RecipeInterface } from "../../interfaces/Recipe"
import DefaultImage from "../../assets/images/verrines-fruits-desserts.webp"
import { v4 as uuidv4 } from 'uuid'
import "../../styles/Recipe/Recipe.css"
import Rate from "../Rate/Rate"

function Recipe(props : { content: RecipeInterface }) {

    const { content } = props

    console.log(content)

    return (
        <>
        {content && content.title !== null ? 
            <div className="recipe-item">
                
                <img src={content.images.length > 0 ? content.images[0] : DefaultImage} alt="" />
                <h2>{content.title} 🔥</h2>

                {content.description.length > 20 ? 
                    <div className="display-description">{content.description}</div> 
                : null }

                <div className="rating">
                    <Rate rate={content.averageRating} />
                </div>

                <ul className="display-ingredients">
                    {content.ingredients.map((ingredient: { name: string, amount: string, unit: string }) => 
                        <li key={uuidv4()}><span>{ingredient.name} :</span> {ingredient.amount} x {ingredient.unit}</li>
                    )}
                </ul>

                <div className="instructions">

                    <h3>Instructions 🥘</h3>

                    <ol className="display-steps">
                        {content.steps.map((step, index) => 
                            <li key={uuidv4()}>  
                                <p><span>{index + 1} - </span>{step}</p>
                            </li>
                        )}
                    </ol>

                </div>

                <div className="display-tags">
                    {content.tags.map((tag) => <span>{tag}</span>)}
                </div>

            </div> 
        : null}
        </>
    )
}

export default Recipe