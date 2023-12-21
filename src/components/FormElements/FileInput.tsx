import "../../styles/FormElements/FileInput.css"

function FileInput(props: { 
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    name?: string, 
    label ?: string,
    arialabel?: string,
}) {

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        if (props.onChange) {
            props.onChange(event);
        }
    };

    return (
        <div className="input-wrapper file-input-wrapper">
            <input 
                onChange={handleInputChange}
                type="file"
                name={props.name} 
                id={props.name}
            />
            <label htmlFor={props.name}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 1024 1024">
                    <path d="M853.333333 874.666667H170.666667c-46.933333 0-85.333333-38.4-85.333334-85.333334V234.666667c0-46.933333 38.4-85.333333 85.333334-85.333334h682.666666c46.933333 0 85.333333 38.4 85.333334 85.333334v554.666666c0 46.933333-38.4 85.333333-85.333334 85.333334z" fill="#8CBCD6"/>
                    <path d="M746.666667 341.333333m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#B3DDF5"/>
                    <path d="M426.666667 341.333333L192 682.666667h469.333333z" fill="#9AC9E3"/>
                    <path d="M661.333333 469.333333l-170.666666 213.333334h341.333333z" fill="#B3DDF5"/>
                    <path d="M810.666667 810.666667m-213.333334 0a213.333333 213.333333 0 1 0 426.666667 0 213.333333 213.333333 0 1 0-426.666667 0Z" fill="#43A047"/>
                    <path d="M768 682.666667h85.333333v256h-85.333333z" fill="#FFFFFF"/>
                    <path d="M682.666667 768h256v85.333333H682.666667z" fill="#FFFFFF"/>
                </svg>
            </label>
        </div>
    );
}

export default FileInput;
