import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Recipe as RecipeInterface } from "../../interfaces/Recipe"
import Header from "../Header/Header"
import Cover from "../Cover/Cover"
import SearchInput from "../FormElements/SearchInput"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import "../../styles/pages/Search.css"
import Banner from "../../assets/images/salade-de-legumes-et-de-poisson.webp"
import Thumbnail from "../Thumbnail/Thumbnail"
import Loader from "../Loader/Loader"

function Search() {

    const [search, setSearch] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [results, setResults] = useState<RecipeInterface[] | null>(null)

    const searchRecipe = async () => {

        setIsLoading(true)
        const keywords = search

        if (keywords) {

            try {
                const response = await fetch(`http://localhost:3000/api/recipe/search/${keywords}`)

                if (response.ok) {
                    const result = await response.json()
                    setResults([...result])
                }
                  
            } catch (error) {
                console.log(error)
            } 

            setIsLoading(false)

        } else console.log("Impossible d'effectuer une recherche vide")   
    }

    return (
        <>  
            <Header />
            <Cover type="text" text="Chercher une recette" src={Banner} format="medium"
            alt="Devanture d'un restaurant dans la nuit" />

            <div className="search">

                <form className="filters">
                    <SearchInput onClick={searchRecipe} value={search} label="Rechercher une recette"
                    onChange={(e) => setSearch(e.target.value)} />
                </form>

                {isLoading ? <Loader /> 
                : (
                    results ?
                        <div className="results">
                            {results.length > 0 ? results.map((result) => <Thumbnail key={uuidv4()} content={result} />)
                            : <h2>Aucun résultat !</h2>}
                        </div>
                    : null
                )}

            </div>

            <Nav />
            <Footer />
        </>
    )
}

export default Search