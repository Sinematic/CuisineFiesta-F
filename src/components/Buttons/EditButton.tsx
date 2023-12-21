import { MouseEventHandler } from "react"
import "../../styles/Buttons/EditButton.css"

function EditButton(props : { onClick?: MouseEventHandler<HTMLDivElement> | undefined, arialabel?: string }) {

    const { onClick, arialabel } = props

    return (
        <div className="edit" onClick={onClick} aria-label={arialabel}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" 
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                <path d="m15 5 4 4"/>
            </svg>
        </div>       
    )
}

export default EditButton