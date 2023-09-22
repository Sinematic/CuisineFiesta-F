import "../../styles/FormElements/Button.css"

function Button(props: { 
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    identifier?: string | undefined, 
    value: string, 
    name?: string, 
    type?: "button" | "submit" | "reset" }) {

    return (
        <button onClick={props.onClick} className={props.identifier} type={props.type} name={props.name}>{props.value}</button>
    )
}

export default Button