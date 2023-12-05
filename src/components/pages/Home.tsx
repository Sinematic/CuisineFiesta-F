import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Recipe as RecipeInterface } from "../../interfaces/Recipe"
import Header from "../Header/Header"
import Cover from "../Cover/Cover"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import Banner from "../../assets/images/hachage-d-herbe.webp"
import "../../styles/pages/Home.css"
import Thumbnail from "../Thumbnail/Thumbnail"
import Blog from "./Blog"

function Home() {

    const navigate = useNavigate()
    const [recipe, setRecipe] = useState<RecipeInterface | null>(null)

    const getLastRecipe = async () => {
        
        try {
            const response = await fetch(`${import.meta.env.VITE_API_RECIPE}/recent`)

            if(response.ok) {
                const result = await response.json()
                if (result) setRecipe(result)
            }

        } catch(error) {
            localStorage.setItem("notificationType", "error")
            localStorage.setItem("notificationContent", "Un problème est survenu lors du chargement !")
        }
    }

    useEffect(() => {
        getLastRecipe()
    }, [])

    
    return (
        <>
            <Header />
            <Cover type="title" text="CuisineFiesta" src={Banner} alt="Bannière accueil CuisineFiesta"/>

            <div className="content-wrapper">

                <div className="recent-article" onClick={() => navigate("/blog")}>
                    <h2>Lire l'article de blog</h2>
                    <Blog />
                </div>

                <div className="home-recipe">
                    <h2 onClick={() => navigate("/galerie")}> 👉 Visiter la galerie 🍘</h2>

                    {recipe ? 
                        <div className="recent-recipe">
                            <p>
                                <span>N</span>
                                <span>E</span>
                                <span>W</span>
                            </p>
                            <Thumbnail content={recipe} />
                        </div> 
                    : "Recette non trouvée"}

                </div>

            </div>

            <Nav />
            <Footer />
        </>
    )
}

export default Home