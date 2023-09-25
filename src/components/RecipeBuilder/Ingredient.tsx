import { useState } from "react"
import Input from "../FormElements/Input"
import Select from "../FormElements/Select"
import "../../styles/RecipeBuilder/Ingredient.css"

function Ingredient(props: {
    ingredients: Array<{ name: string; amount: string; unit: string }>;
    setIngredients: React.Dispatch<React.SetStateAction<Array<{ name: string; amount: string; unit: string }>>>,
}) {

    const units = [
        "Millilitres (mL)",
        "Centilitres (cL)",
        "Litres (L)",
        "Milligrammes (mg)",
        "Grammes (g)",
        "Kilogrammes (kg)",
        "Pincées",
        "Cuillères à soupe (c. à s.)",
        "Cuillères à café (c. à c.)",
        "Pièces"
    ]

    const [name, setName] = useState<string>("")
    const [amount, setAmount] = useState<string>("")
    const [unit, setUnit] = useState<string>("")

    const addIngredient = () => {

        if (name.trim().length > 1 && amount.length > 0 && unit.length > 0) {
            props.setIngredients([...props.ingredients, { 
                name: name,
                amount: amount,
                unit: unit
            }])
        }
    }

    return (
        <div className="ingredient-wrapper">

            <div className="first-row"> 
                <Input onChange={(e) => setName(e.target.value)} value={name}
                name="ingredient-name" type="text" label="Ingrédient" placeholder={true} />

                <div className="check" onClick={addIngredient}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                    viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" 
                    strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                </div>
            </div>
           
            <div className="second-row">
                <Input onChange={(e) => setAmount(e.target.value)} value={amount}
                name="ingredient-amount" type="number" 
                label="Quantité" placeholder={true} maxLength={3} />
                <Select name="unit" options={units} label="Unités"
                state={unit} setter={setUnit} /> 
            </div>
        </div>
    )
}

export default Ingredient
