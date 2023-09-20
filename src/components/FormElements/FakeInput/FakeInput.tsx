import "../../../styles/FormElements/Input/Input.css"
import "../../../styles/FormElements/FakeInput/FakeInput.css"
import Lock from "../../../assets/icons/lock.svg"

function FakeInput(props: { 
    value: string, 
    name: string, 
    label: string | React.ReactNode, 
    children?: React.ReactNode }) {

    return (
        <div className="input-wrapper input-filled">
            <input className={"fake-input "} type="text" value={props.value} 
            id={props.name} disabled={true} />
            <label htmlFor={props.name}>{props.label}</label>
            <img className="lock-icon" src={Lock} alt="" />
            {props.children ? <span className="hint-link">{props.children}</span> : null}
        </div>
    )
}

export default FakeInput