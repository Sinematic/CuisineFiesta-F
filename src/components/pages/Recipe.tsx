import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { v4 as uuidv4 } from 'uuid'
import { Recipe as RecipeInterface } from "../../interfaces/Recipe"
import Rate from "../Rate/Rate"
import "../../styles/pages/Recipe.css"
import DefaultImage from "../../assets/images/verrines-fruits-desserts.webp"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import Loader from "../Loader/Loader"

function Recipe() {

    const userId = localStorage.getItem("user")
    const token = localStorage.getItem("token")

    const navigate = useNavigate()
    const params = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [recipe, setRecipe] = useState<RecipeInterface | null>(null)

    const getRecipe = async () => {
        
        try {
            const response = await fetch(`${import.meta.env.VITE_API_RECIPE}/${params.id}`)

            if (response.ok) {
                const result = await response.json()

                if (result && result.title) setRecipe(result)

            } else console.log("Une erreur est survenue !")

        } catch(error) {
            console.log(error)
        }
    }

    const deleteRecipe = async () => {
        setIsLoading(true)

        if (recipe) {

            try {
                const response = await fetch(`${import.meta.env.VITE_API_RECIPE}/${params.id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
    
                if (response.ok) {
                    navigate("/")
                } else console.log("Une erreur est survenue !")

            } catch(error) {
                console.log(error)
            } 
        }

        setIsLoading(false)
    }

    const editRecipe = () => console.log("")

    useEffect(() => {
        getRecipe()
        setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
    <>
        {!isLoading ?
        <>
            {recipe && recipe.title ? 
                <div className="recipe-item">
                    
                    <div className="img-name-wrapper">
                        <img src={recipe.images ? recipe.images[0] : DefaultImage} alt="" />
                        <h1>{recipe.title} 🔥</h1>
                    </div>
                    <div className="duration-wrapper">
                        <div className="display-duration icon-btn">
                            <div className="time" aria-label="Temps requis à la préparation">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 10"/>
                                </svg>
                            </div>
                            <span>{recipe.time}</span>
                        </div>    
                    </div>
       
                    <div className="display-tags">
                        {recipe.tags.map((tag) => <span key={uuidv4()}>{tag}</span>)}
                    </div>    

                    <div className="rating">
                        <Rate rate={recipe.averageRating} />
                    </div>

                    {recipe.description.length > 20 ? 
                        <div className="display-description">{recipe.description}</div> 
                    : null }

                    <div className="display-ingredients">

                        <h2>Ingrédients 🥦<span>({recipe.ingredients.length})</span></h2>

                        <ul>
                            {recipe.ingredients.map((ingredient: { name: string, amount: string, unit: string }) => 
                                <li key={uuidv4()}><span>{ingredient.name} :</span> {ingredient.amount} x {ingredient.unit}</li>
                            )}
                        </ul>
                    </div>

                    <div className="instructions">

                        <h2>Instructions 🥘</h2>

                        <ol className="display-steps">
                            {recipe.steps.map((step, index) => 
                                <li key={uuidv4()}>  
                                    <p><span>{index + 1} - </span>{step}</p>
                                </li>
                            )}
                        </ol>

                    </div>

                    
                    {recipe.authorId === userId ? 
                        <div className="icon-btn edit-delete-wrapper">
                            <div className="edit" onClick={() => editRecipe()} aria-label="Modifier la recette">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" 
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                    <path d="m15 5 4 4"/>
                                </svg>
                            </div>       

                            <div className="delete" onClick={() => deleteRecipe()} aria-label="Supprimer la recette">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" 
                                stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 6h18"/>
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                    <line x1="10" x2="10" y1="11" y2="17"/>
                                    <line x1="14" x2="14" y1="11" y2="17"/>
                                </svg>
                            </div>
                        </div>
                    : null}
                </div> 

            : null}
        </>
        : <Loader />}

        <Nav />
        <Footer />
    </>
    )
}

export default Recipe