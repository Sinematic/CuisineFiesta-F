import "../../styles/Input/Input.css"
import "../../styles/FakeInput/FakeInput.css"
import Lock from "../../assets/icons/lock.svg"

function FakeInput(props: { 
    value: string, 
    identifier?: string | undefined, 
    name: string, 
    label: string | React.ReactNode, 
    children?: React.ReactNode }) {

    return (
        <div className="input-wrapper input-filled">
            <input className={"fake-input " + (props.identifier ? props.identifier : "")} type="text" disabled={true} value={props.value} />
            <label htmlFor={props.name}>{props.label}</label>
            <img className="lock-icon" src={Lock} alt="" />
            {props.children ? <span className="hint-link">{props.children}</span> : null}
        </div>
    )
}

export default FakeInput