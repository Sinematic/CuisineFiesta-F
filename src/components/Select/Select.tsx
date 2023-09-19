import "../../styles/Select/Select.css"

function Select(props: { 
    name: string, 
    options: Array<string>, 
    state: string | undefined, 
    setter: React.Dispatch<React.SetStateAction<string | undefined>>,
    label: string }) {

    return (
        <div className="select-wrapper">
            <select id={props.name} name={props.name} onChange={(e) => props.setter(e.target.value)}
>
                <option value="">{props.label}</option>
                {props.options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    )
}

export default Select