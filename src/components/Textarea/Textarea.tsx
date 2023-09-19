import "../../styles/Textarea/Textarea.css"

function Textarea(props: { 
    state: string | undefined,
    setter: React.Dispatch<React.SetStateAction<string | undefined>>, 
    value?: string | undefined,
    identifier?: string | undefined,
    name: string | undefined, 
    label ?: string | undefined, 
    minLength?: number | undefined, 
    maxLength?: number | undefined
}) {

    return (
        <div className="textarea-wrapper">
            <label htmlFor={props.name}>{props.label}</label>
            <textarea onChange={(e) => props.setter(e.target.value)} id={props.name} rows={3} 
            name={props.name} minLength={props.minLength} maxLength={props.maxLength}>
                {props.value}
            </textarea>
        </div>
    )
}
export default Textarea