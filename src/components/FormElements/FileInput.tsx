import "../../styles/FormElements/FileInput.css"


function FileInput(props: { 
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    value?: string | undefined,
    name: string | undefined, 
    label ?: string | undefined,
    maxLength?: number | undefined
}) {

    return (
        <div className="input-wrapper">
            <input onChange={props.onChange} type="file" value={props.value} 
            name={props.name} id={props.name}
            maxLength={props.maxLength} />
            <label htmlFor={props.name}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" 
                stroke="#3c3b3b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/>
                    <line x1="16" x2="22" y1="5" y2="5"/>
                    <line x1="19" x2="19" y1="2" y2="8"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
            </label>
        </div>
    )
}

export default FileInput