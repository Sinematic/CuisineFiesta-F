import { useState } from "react"
import Input from "../FormElements/Input/Input"
import Select from "../FormElements/Select/Select"
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

    const [unit, setUnit] = useState<string>("")

    return (
        <div className="ingredient-wrapper">
            <Input name="ingredientName" type="text" label="Ingrédient n°1" />
            <Input name="ingredientAmount" type="number" label="Quantité" />
            <Select name="unit" options={units} state={unit} setter={setUnit} label="Unité de mesure"/>
        </div>
    )
}

export default Ingredient