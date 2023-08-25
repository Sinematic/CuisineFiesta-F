import "../../styles/Form/Form.css"

function Form(props: { method: "GET" | "POST", action: string, buttons: Array <
    { identifier?: string, value: string, name?: string, type?: "button" | "submit" | "reset" }
    > }) {

    return (
        <form method={props.method} action={props.action}>
            
        </form>
    )
}

export default Form