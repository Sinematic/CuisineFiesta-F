import "../../styles/FormElements/Select.css"

function Select(props: { 
    name: string, 
    options: Array<string>, 
    state: string | undefined, 
    setter: React.Dispatch<React.SetStateAction<string>>,
    label: string ,
    identifier?: string
}) {

    return (
        <div className={"select-wrapper " + (props.identifier ? props.identifier : "")}>
            {props.state !==  "" ?<label>{props.label}</label> : ""}
            <select id={props.name} name={props.name} onChange={(e) => props.setter(e.target.value)} value={props.state || ""}>
                <option value="">{props.label}</option>
                {props.options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    )
}

export default Select