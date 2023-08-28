import "../../styles/Input/Input.css"

function Input(props: { 
    type: string, 
    name: string | undefined, 
    placeholder ?: string | undefined, 
    minLength?: number | undefined, 
    maxLength?: number | undefined }) {

    return (
        <input type={props.type} name={props.name} placeholder={props.placeholder} minLength={props.minLength} maxLength={props.maxLength}/>
    )
}

export default Input