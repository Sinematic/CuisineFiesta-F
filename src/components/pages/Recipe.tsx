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
import EditButton from "../Buttons/EditButton"
import DeleteButton from "../Buttons/DeleteButton"

function Recipe() {

    const width = window.innerWidth

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
                        <img src={DefaultImage} alt="" />
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
                            <span>{recipe.time % 60 === 0 ? (recipe.time / 60) + (width < 720 ? "h" : " heures") 
                            : recipe.time + (width < 720 ? "m" : " minutes") }</span>
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
                        <h2>Ingrédients 🥦
                            <span>({recipe.recipeFor} personne{recipe.recipeFor > 1 ? "s" : ""})</span>
                        </h2>

                        <ul>
                            {recipe.ingredients.map((ingredient: { name: string, amount: string, unit: string }) => 
                                <li key={uuidv4()}>{ingredient.amount} 
                                {ingredient.unit === "Pas d'unité" || ingredient.unit === "Pièces" || ingredient.unit === "Pièce" ? " " 
                                : " " + ingredient.unit + (
                                    ingredient.name[0] === "A" || ingredient.name[0] === "E"  || ingredient.name[0] === "H"  || 
                                ingredient.name[0] === "I"  || ingredient.name[0] === "O"  || ingredient.name[0] === "U" 
                                ? " d'" : " de ")}
                                <span>{ingredient.name}</span></li>
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

                            <EditButton onClick={editRecipe} arialabel="Modifier la recette" />  

                            <DeleteButton onClick={deleteRecipe} arialabel="Supprimer la recette" />

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