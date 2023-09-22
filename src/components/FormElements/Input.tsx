import "../../styles/FormElements/Input.css"

function Input(props: { 
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    type: string, 
    value?: string | undefined,
    identifier?: string | undefined,
    name: string | undefined, 
    label ?: string | undefined, 
    minLength?: number | undefined, 
    maxLength?: number | undefined
}) {

    return (
        <div className={(props.identifier ? props.identifier : "") + " input-wrapper"}>
            <input onChange={props.onChange} type={props.type} value={props.value} name={props.name} 
            id={props.name} minLength={props.minLength} maxLength={props.maxLength} />
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    )
}

export default Input