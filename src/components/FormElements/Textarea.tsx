import "../../styles/FormElements/Textarea.css"

function Textarea(props: { 
    state?: string,
    setter: React.Dispatch<React.SetStateAction<string>>, 
    value?: string,
    identifier?: string,
    name: string, 
    label?: string,
    rows?: number
    arialabel?: string
    minLength?: number, 
    maxLength?: number
}) {

    return (
        <div className="textarea-wrapper">
            {props.label ? <label htmlFor={props.name}>{props.label}</label> : null}
            <textarea onChange={(e) => props.setter(e.target.value)} id={props.name} name={props.name}
            rows={props.rows ? props.rows : 3} aria-label={props.arialabel ? props.arialabel : ""}
            minLength={props.minLength} maxLength={props.maxLength} value={props.value} />
            {props.maxLength ? <span className={"length-indicator " + 
            (props.value && props.value?.length < props.maxLength ? "green" : "red")}>
                {props.value?.length} / {props.maxLength}
            </span> : null}
        </div>
    )
}
export default Textarea