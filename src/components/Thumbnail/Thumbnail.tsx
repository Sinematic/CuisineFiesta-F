import { useNavigate } from "react-router"
import "../../styles/Thumbnail/Thumbnail.css"
import entryCourse from "../../assets/images/bol-rempli-de-legumes.webp"
import mainCourse from "../../assets/images/salade-de-legumes-et-de-poisson.webp"
import dessert from "../../assets/images/pommes-et-ustensiles-de-cuisine.webp"
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon"


function Thumbnail(props: { url: string, title: string, mealType: string, image: string }) {

    const { title, url, image, mealType } = props
    const navigate = useNavigate()

    return (
        <div className="thumbnail" onClick={() => navigate(`../recette/${url}`)}>
            <img src={mealType === "Entrée" ? entryCourse : (mealType === "Dessert" ? dessert : mainCourse)} alt={"Recette " + title} />
            <h3>{title} ✨<div /></h3>
            <div className="overlay"></div>
            <FavoriteIcon title={title} url={url} image={image} mealType={mealType} />
        </div>
        /*
        <div className="thumbnail" onClick={() => navigate(`../recette/${content._id}`)}>
            <h3>{content.title} ✨<div /></h3>
            <img src={DefaultImage} alt={"Recette " + content.title} />
            <div className="overlay"></div>
        </div>*/
    )
}

export default Thumbnail