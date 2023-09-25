import "../../styles/FormElements/Input.css"

function Input(props: { 
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    type: string, 
    value?: string,
    identifier?: string,
    name: string, 
    label?: string, 
    placeholder?: boolean,
    minLength?: number, 
    maxLength?: number
}) {

    return (
        <div className={(props.value ? "input-filled" : "") + " input-wrapper " + (props.identifier ? props.identifier : "")}>
            <input onChange={props.onChange} type={props.type} value={props.value} name={props.name} 
            id={props.name} minLength={props.minLength} maxLength={props.maxLength} />
            <label className={props.placeholder ? "placeholder-like" : ""} 
            htmlFor={props.name}>{props.label}</label>
        </div>
    )
}

export default Input