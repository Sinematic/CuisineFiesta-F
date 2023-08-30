import "../../styles/Input/Input.css"

function Input(props: { 
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    identifier?: string | undefined,
    type: string, 
    value?: string | undefined,
    name: string | undefined, 
    placeholder ?: string | undefined, 
    minLength?: number | undefined, 
    maxLength?: number | undefined,
    required?: "true" | "false"    
}) {

    return (
        <input onChange={props.onChange} value={props.value}
        className={props.identifier} type={props.type} name={props.name} placeholder={props.placeholder} 
        minLength={props.minLength} maxLength={props.maxLength} required={props.required === "false" ? false : true} />
    )
}

export default Input