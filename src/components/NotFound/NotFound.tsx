import "../../styles/NotFound/NotFound.css"
import Nav from "../Nav/Nav"

function NotFound() {

    return (
        <>
            <div className="wrapper-404">
                <h1>Page non trouvée ! 🤯</h1>
                <p>Tu as dû t'égarer, cette page n'existe pas.</p>
            </div>
            <Nav />
        </>

    )
}

export default NotFound