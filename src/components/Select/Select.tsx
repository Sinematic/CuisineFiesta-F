import "../../styles/Select/Select.css"

function Select(props: { 
    name: string, 
    options: Array<string>, 
    state: string | undefined, 
    setter: React.Dispatch<React.SetStateAction<string | undefined>>,
    label: string }) {

    return (
        <>
            <label htmlFor={props.name}>{props.label}</label>
            <select id={props.name} name={props.name} onChange={(e) => props.setter(e.target.value)}>
                {props.options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
        </>
    )
}

export default Select