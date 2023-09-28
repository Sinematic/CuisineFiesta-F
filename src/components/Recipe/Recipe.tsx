import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { v4 as uuidv4 } from 'uuid'
import { Recipe as RecipeInterface } from "../../interfaces/Recipe"
import Rate from "../Rate/Rate"
import "../../styles/Recipe/Recipe.css"
import DefaultImage from "../../assets/images/verrines-fruits-desserts.webp"

function Recipe() {

    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    const params = useParams()

    const [recipe, setRecipe] = useState<RecipeInterface | null>(null)

    const getRecipe = async () => {
        const response = await fetch(`http://localhost:3000/api/recipe/${params.id}`)

        if (response.ok) {
            const result = await response.json()

            if (result) setRecipe(result)
        }
    }

    useEffect(() => {
        getRecipe()
    }, [])

    const deleteRecipe = async () => {
        console.log(recipe._id)

        try {
            const response = await fetch(`http://localhost:3000/api/recipe/${recipe._id}`, {
                method: "DELETE",
                headers: {
                    "recipe-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })

            if (response.ok) {
                navigate("/")
            } else console.log(/*response*/)
        } catch(error) {
            console.log(error)
        }

    }

    return (
        <>
        {recipe && recipe.title !== null ? 
            <div className="recipe-item">
                
                <img src={recipe.images.length > 0 ? recipe.images[0] : DefaultImage} alt="" />
                <h2>{recipe.title} 🔥</h2>

                {recipe.description.length > 20 ? 
                    <div className="display-description">{recipe.description}</div> 
                : null }

                <div className="delete" onClick={() => deleteRecipe()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" 
                    stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18"/>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                        <line x1="10" x2="10" y1="11" y2="17"/>
                        <line x1="14" x2="14" y1="11" y2="17"/>
                    </svg>
                </div>

                <div className="rating">
                    <Rate rate={recipe.averageRating} />
                </div>

                <ul className="display-ingredients">
                    {recipe.ingredients.map((ingredient: { name: string, amount: string, unit: string }) => 
                        <li key={uuidv4()}><span>{ingredient.name} :</span> {ingredient.amount} x {ingredient.unit}</li>
                    )}
                </ul>

                <div className="instructions">

                    <h3>Instructions 🥘</h3>

                    <ol className="display-steps">
                        {recipe.steps.map((step, index) => 
                            <li key={uuidv4()}>  
                                <p><span>{index + 1} - </span>{step}</p>
                            </li>
                        )}
                    </ol>

                </div>

                <div className="display-tags">
                    {recipe.tags.map((tag) => <span>{tag}</span>)}
                </div>

            </div> 
        : null}
        </>
    )
}

export default Recipe