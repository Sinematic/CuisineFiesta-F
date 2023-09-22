import { useState } from "react"
import Input from "../FormElements/Input"
import Select from "../FormElements/Select"
import "../../styles/RecipeBuilder/Ingredient.css"

function Ingredient() {

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
        "Pièces",
        "Onces (oz)"
    ]

    const [name, setName] = useState<string>("")
    const [amount, setAmount] = useState<string>()
    const [unit, setUnit] = useState<string>("")

    return (
        <div className="ingredient-wrapper">
            <Input onChange={(e) => setName(e.target.value)} value={name} 
            name="ingredientName" type="text" label="Ingrédient n°1" placeholder={true} />
            <Input onChange={(e) => setAmount(e.target.value)} value={amount} 
            name="ingredientAmount" type="number" label="Quantité" />
            <Select name="unit" options={units} label="Unité de mesure"
            state={unit} setter={setUnit}/>
        </div>
    )
}

export default Ingredient