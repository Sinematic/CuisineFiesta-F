import "../../styles/Input/Input.css"
import "../../styles/FakeInput/FakeInput.css"
import Lock from "../../assets/icons/lock.svg"

function FakeInput(props: { value: string, identifier?: string | undefined, name: string, label: string }) {

    return (
        <div className="input-wrapper input-filled">
            <input className={"fake-input " + props.identifier ? props.identifier : ""} type="text" disabled={true} value={props.value} />
            <label htmlFor={props.name}>{props.label}</label>
            <img className="lock-icon" src={Lock} alt="" />
        </div>
    )
}

export default FakeInput