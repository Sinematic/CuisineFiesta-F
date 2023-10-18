import { useNavigate } from "react-router"
import "../../styles/pages/NotFound.css"
import Nav from "../Nav/Nav"

function NotFound() {

    const navigate = useNavigate()

    setTimeout(() => {
        navigate("/")
    }, 5000)

    return (
        <>
            <div className="wrapper-404">
                <h1>Page non trouvée ! 🤯</h1>
                <p>Tu as dû t'égarer, cette page n'existe pas.</p>
                <p onClick={() => navigate("/")} className="redirect-home">Retour à la page d'accueil</p>
            </div>
            <Nav />
        </>

    )
}

export default NotFound