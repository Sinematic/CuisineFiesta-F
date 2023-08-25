import "../../styles/Button/Button.css"

function Button(props: { identifier?: string, value: string, name?: string, type?: "button" | "submit" | "reset" }) {

    return (
        <button  className={props.identifier} type={props.type} name={props.name}>{props.value}</button>
    )
}

export default Button