import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import Textarea from "../FormElements/Textarea"
import Button from "../FormElements/Button"
import "../../styles/RecipeBuilder/StepsList.css"

function StepsList(props : { 
    steps: Array<string>, 
    setSteps: React.Dispatch<React.SetStateAction<Array<string>>>
}) {  

    const [content, setContent] = useState<string>("")

    const handleContent = () => {
        props.setSteps([...props.steps, content])
        setContent("")
    }

    return (
        <div className="steps-wrapper">
            <Textarea value={content} setter={setContent} name="step" minLength={10} maxLength={500}/>
            <Button onClick={handleContent} value="Valider l'étape" type="button" />

            {props.steps && props.steps.length > 0 ? <ol className="steps">
                {props.steps.map((step) => <li key={uuidv4()} className="step">{step}</li>)}

            </ol> : null}
        </div>
    )
}

export default StepsList