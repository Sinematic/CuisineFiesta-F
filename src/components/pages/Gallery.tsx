import { useEffect, useState } from "react"
import { Recipe as RecipeInterface } from "../../interfaces/Recipe"
import { v4 as uuidv4 } from 'uuid'
import Header from "../Header/Header"
import Cover from "../Cover/Cover"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import "../../styles/pages/Gallery.css"
import Banner from "../../assets/images/poelee-de-legumes-et-de-viande.webp"
import Thumbnail from "../Thumbnail/Thumbnail"

function Gallery() {

    const [recipes, setRecipes] = useState<RecipeInterface[] | null>(null)

    const getRecipes = async () => {
        
        try {
            const response = await fetch(`${import.meta.env.VITE_API_RECIPE}`)

            if(response.ok) {
                const result = await response.json()
                if (result) setRecipes([...result])
            }

        } catch(error) {
            localStorage.setItem("notificationType", "error")
            localStorage.setItem("notificationContent", "Un problème est survenu lors du chargement !")
        }
    }

    useEffect(() => {
        getRecipes()
    }, [])


    return (
        <>
            <Header />
            <Cover type="text" text="Les Recettes 🍕" src={Banner} alt="" format="reduced"/>
            <div className="gallery">
                {recipes ? 
                    (recipes.length > 0 ? 
                        recipes.map((recipe) => 
                            <Thumbnail key={uuidv4()} title={recipe.title} url={recipe._id} 
                            image={recipe.image} mealType={recipe.mealType} />)    
                    : <h2>Aucune recette, ajoutes-en une !</h2>)
                
                : null}
            </div>
            <Nav />
            <Footer />
        </>   
    )
}

export default Gallery