import { useState } from "react"
import "../../styles/Nav/Nav.css"
import DropdownMenu from "../Dropdown/DropdownMenu"
import { useNavigate, useLocation } from "react-router"
import Home from "../../assets/icons/home.svg"
import BurgerMenu from "../../assets/icons/burger-menu.svg"
import Search from "../../assets/icons/search.svg"
import User from "../../assets/icons/user.svg"

function Nav() {

    const page = useLocation()
    console.log(page.pathname)

    const [isOpen, setisOpen] = useState(false)
    const navigate = useNavigate()
    const hamburgerMenu = [
        {
            path: "/blog",
            content: "Le Blog",
            badge: "green"
        },
        {
            path: "/ajouter-une-recette",
            content: "Ajouter une recette",
            badge: "blue"
        },
        {
            path: "/les-mieux-notees",
            content: "Les incontournables",
            badge: undefined
        },
        {
            path: "/les-recettes-du-moment",
            content: "Les plats du moment",
            badge: undefined
        },
        {
            path: "/menu-aleatoire",
            content: "Le menu Mystère",
            badge: undefined
        }
    ]

    const handleNavigation = (path: string) => {
        setisOpen(false)
        navigate(path)
    }

    return (
        <>
            <nav className="nav-bar">
                {page.pathname !== "/" ? 
                    <div onClick={() => navigate("/")} className="nav-icon home">
                        <img src={Home} alt="Accueil" />                   
                    </div> 
                : null}
                
                <div onClick={() => setisOpen(!isOpen)} className="nav-icon burger-menu">
                    <img src={BurgerMenu} alt="Menu" />                   
                    <DropdownMenu isOpen={isOpen} links={hamburgerMenu} />
                </div>

                <div className="nav-icon search" onClick={() => handleNavigation('/search')}>
                    <img src={Search} alt="Rechercher une recette" />
                </div>

                <div className="nav-icon user-profile" onClick={() => handleNavigation("/profile")}>
                    <img src={User} alt="Vers la page de profil" />                   
                </div>
            </nav>  
        </>
    )
}

export default Nav