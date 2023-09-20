import "../../../styles/FormElements/Textarea/Textarea.css"

function Textarea(props: { 
    state: string | undefined,
    setter: React.Dispatch<React.SetStateAction<string>>, 
    value?: string,
    identifier?: string,
    name: string, 
    label ?: string, 
    minLength?: number, 
    maxLength?: number
}) {

    return (
        <div className="textarea-wrapper">
            <label htmlFor={props.name}>{props.label}</label>
            <textarea onChange={(e) => props.setter(e.target.value)} id={props.name} rows={3} 
            name={props.name} minLength={props.minLength} maxLength={props.maxLength} value={props.value} />
        </div>
    )
}
export default Textarea