import "../../styles/Input/FileInput.css"


function FileInput(props: { 
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    value?: string | undefined,
    identifier?: string | undefined,
    name: string | undefined, 
    label ?: string | undefined,
    maxLength?: number | undefined
}) {

    return (
        <div className={props.identifier + " input-wrapper"}>
            <input onChange={props.onChange} type="file" value={props.value} name={props.name} 
            maxLength={props.maxLength} />
            <label htmlFor={props.name}>{props.label}</label>
        </div>
    )
}

export default FileInput