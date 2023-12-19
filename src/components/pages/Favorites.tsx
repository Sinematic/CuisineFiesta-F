import Cover from "../Cover/Cover"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Nav from "../Nav/Nav"
import Banner from  "../../assets/images/bol-rempli-de-legumes.webp"
import { FavList } from "../../interfaces/FavList"
import { v4 as uuidv4 } from 'uuid'
import "../../styles/pages/Favorites.css"
import Thumbnail from "../Thumbnail/Thumbnail"

function Favorites() {

    const favList : FavList[] = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")!) : []

    return (
        <>
            <Header />
            <Cover type="text" text="Mes recettes favorites" src={Banner} alt="Bannière accueil CuisineFiesta" format="medium"/>

            <div className="favlist-wrapper">
                {favList.length > 0 ? <>
                    <p className="found-recipes">{favList.length} {favList.length === 1 ? "recette trouvée" : "recettes trouvées"}</p>
                    <ul className="fav-list">{favList.map((favorite) => <Thumbnail key={uuidv4()} title={favorite.title} url={favorite.url} 
                            image={favorite.image} mealType={favorite.mealType} />)}
                    </ul>
                </> : <h2 className="no-favorites">Aucune recette ajoutée aux favoris pour le moment ! 🫣</h2>}
            </div>

            <Nav />
            <Footer />
        </>
    )
}

export default Favorites