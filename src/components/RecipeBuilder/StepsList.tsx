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

        if(content.length > 10) {
            props.setSteps([...props.steps, content])
            setContent("")
        }        
    }

    const deleteSelf = (index : number) => {
        const tempArray = [...props.steps]
        tempArray.splice(index, 1)
        props.setSteps(tempArray)
    }


    return (
        <div className="steps-wrapper">
            
            <h3>Étapes de préparation 🍲</h3>

            <Textarea value={content} setter={setContent} name="step" 
            aria-label="Étape de préparation" minLength={10} maxLength={500}/>

            <Button onClick={handleContent} value="Valider l'étape" type="button" />

            {props.steps && props.steps.length > 0 ? <ol className="steps">
                {props.steps.map((step, index) => 

                <li key={uuidv4()} className="step">

                    <span><em>{index + 1}: </em>{step}</span>

                    <div className="trash" onClick={() => deleteSelf(index)} aria-label="Supprimer l'ingrédient">
                        <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17" />
                        </svg>
                    </div>

                </li>)}
            </ol> : null}
        </div>
    )
}

export default StepsList