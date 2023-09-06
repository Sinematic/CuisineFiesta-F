import { useState } from "react"
import "../../styles/Nav/Nav.css"
import DropdownMenu from "../Dropdown/DropdownMenu"

function Nav() {

    const [isOpen, setisOpen] = useState(false)

    const hamburgerMenu = [
        {
            path: "/blog",
            content: "Le Blog",
            badge: "green"
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

    return (
        <>  
            <nav className="nav-bar">

                <div onClick={() => setisOpen(!isOpen)} className="nav-icon">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" x2="20" y1="12" y2="12"/>
                        <line x1="4" x2="20" y1="6" y2="6"/>
                        <line x1="4" x2="20" y1="18" y2="18"/>
                    </svg> 
                                        
                    <DropdownMenu isOpen={isOpen} links={hamburgerMenu} />

                </div>

                <div className="nav-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="7">
                        <circle cx="40" cy="40" r="30" />
                        <line x1="65" y1="65" x2="90" y2="90" />
                    </svg>
                </div>

                <div className="nav-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="5"/>
                        <path d="M20 21a8 8 0 1 0-16 0"/>
                    </svg>
                </div>
            </nav>  
        </>
    )
}

export default Nav