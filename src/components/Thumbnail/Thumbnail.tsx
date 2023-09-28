import { useNavigate } from "react-router"
import { Recipe as RecipeInterface } from "../../interfaces/Recipe"
import "../../styles/Thumbnail/Thumbnail.css"
import DefaultImage from "../../assets/images/bol-rempli-de-legumes.webp"


function Thumbnail(props: { content: RecipeInterface }) {

    const { content } = props
    const navigate = useNavigate()

    return (
        <div className="thumbnail" onClick={() => navigate(`recette/${content._id}`)}>
            <img src={content.images[0] && content.images[0] ! == "" ? content.images[0] : DefaultImage} alt={"Recette " + content.title} />
            <h3>{content.title} ✨</h3>
            <div className="overlay"></div>
        </div>
    )
}

export default Thumbnail