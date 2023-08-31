import "../../styles/Input/Input.css"

function Input(props: { 
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    type: string, 
    value?: string | undefined,
    name: string | undefined, 
    label ?: string | undefined, 
    minLength?: number | undefined, 
    maxLength?: number | undefined
}) {

    return (
        <div className={props.name + "-wrapper input-wrapper"}>
            <input onChange={props.onChange} type={props.type} value={props.value} name={props.name} 
            minLength={props.minLength} maxLength={props.maxLength} />
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    )
}

export default Input