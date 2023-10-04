import { useState } from "react"
import "../../styles/Nav/Nav.css"
import DropdownMenu from "../Dropdown/DropdownMenu"
import { useNavigate, useLocation } from "react-router"

function Nav() {

    const page = useLocation()
    const [isOpen, setisOpen] = useState(false)
    const navigate = useNavigate()

    const hamburgerMenu = [
        {
            path: "/blog",
            content: "Le Blog",
            badge: undefined
        },
        {
            path: "/quiz",
            content: "Quiz",
            badge: "green"
        },
        {
            path: "/ajouter-une-recette",
            content: "Ajouter une recette",
            badge: "golden"
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>                  
                    </div> 
                : null}

                <div onClick={() => setisOpen(!isOpen)} className="nav-icon burger-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" x2="20" y1="12" y2="12"/>
                        <line x1="4" x2="20" y1="6" y2="6"/>
                        <line x1="4" x2="20" y1="18" y2="18"/>
                    </svg>            
                    <DropdownMenu isOpen={isOpen} links={hamburgerMenu} />
                </div>

                <div className="nav-icon search" onClick={() => handleNavigation('/recherche')}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" 
                    strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="40" cy="40" r="30" />
                        <line x1="65" y1="65" x2="90" y2="90" />
                    </svg>
                </div>

                <div className="nav-icon user-profile" onClick={() => handleNavigation("/profil")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="5"/>
                        <path d="M20 21a8 8 0 1 0-16 0"/>
                    </svg>                  
                </div>
            </nav>  
        </>
    )
}

export default Nav