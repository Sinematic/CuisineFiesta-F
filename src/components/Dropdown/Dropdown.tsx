import { useState } from "react"
import "../../styles/Dropdown/Dropdown.css"

function Dropdown(props: { title: string, identifier?: string, children: React.ReactNode }) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="dropdown">

            <div className={"dropdown-bar" + (isOpen ? " dropdown-clicked" : "") + (props.identifier ? " " + props.identifier : "")}>
                <p>{props.title}</p>
                <svg onClick={() => setIsOpen(!isOpen)} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" />
                </svg>
            </div>

            <div className={"dropdown-content" + (isOpen ? " open" : "")}>
                <div className="dropdown-padding">
                    {props.children}
                </div>
            </div>

        </div>
    )
}

export default Dropdown