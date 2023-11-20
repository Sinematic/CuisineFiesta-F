import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import "../../styles/pages/NotFound.css";
import Nav from "../Nav/Nav";

function NotFound() {

    const navigate = useNavigate();

    const redirectionRef = useRef<number | undefined>(undefined);

    useEffect(() => {

        redirectionRef.current = setTimeout(() => {
            navigate("/")
        }, 5000)

        return () => {
            clearTimeout(redirectionRef.current)
        }
    }, [navigate])

    return (
        <>
            <div className="wrapper-404">
                <h1>Page non trouvée ! 🤯</h1>
                <p>Tu as dû t'égarer, cette page n'existe pas.</p>
                <p onClick={() => {
                    clearTimeout(redirectionRef.current)
                    navigate("/");
                }} className="redirect-home">Retour à la page d'accueil</p>
            </div>

            <Nav />
        </>
    );
}

export default NotFound;
