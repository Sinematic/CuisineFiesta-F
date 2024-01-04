import { MouseEventHandler } from 'react'
import "../../styles/Close/Close.css"

    function Close(props: { onClick: MouseEventHandler }) {

    return (
        <div className="close-wrapper" onClick={props.onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" 
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
            </svg>
        </div>
    )
}

export default Close