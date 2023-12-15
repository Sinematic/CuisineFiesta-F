import { useNavigate } from "react-router"
import { Recipe as RecipeInterface } from "../../interfaces/Recipe"
import "../../styles/Thumbnail/Thumbnail.css"
import DefaultImage from "../../assets/images/bol-rempli-de-legumes.webp"


function Thumbnail(props: { content: RecipeInterface }) {

    const { content } = props
    const navigate = useNavigate()

    return (
        <div className="thumbnail" onClick={() => navigate(`../recette/${content._id}`)}>
            <img src={DefaultImage} alt={"Recette " + content.title} />
            <h3>{content.title} ✨<div /></h3>
            <div className="overlay"></div>
        </div>
    )
}

export default Thumbnail