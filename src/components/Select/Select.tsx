import "../../styles/Select/Select.css"

function Select(props: { name: string, options: Array<string>, label: string }) {
    return (
        <>
            <label htmlFor={props.name}>{props.label}</label>
            <select name={props.name}>
                {props.options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
        </>
    )
}

export default Select