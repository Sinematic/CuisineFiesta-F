import "../../styles/FormElements/Input.css"
import "../../styles/FormElements/SearchInput.css"

function SearchInput(props: { 
    onClick?: React.MouseEventHandler<HTMLDivElement>,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    value?: string,
    label?: string
}) {

    return (
        <div className={(props.value ? "input-filled" : "") + " input-wrapper "}>
            <input onChange={props.onChange} type="search" value={props.value} name="search" />
            <label className="placeholder-like" htmlFor="search">{props.label}</label>

            <div className="svg-wrapper" onClick={props.onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" 
                aria-label="Bouton pour rechercher" stroke="#FFFFFF" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.3-4.3"/>
                </svg>
            </div>
        </div>
    )
}

export default SearchInput