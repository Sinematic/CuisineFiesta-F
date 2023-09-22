import { useState } from "react"
import "../../styles/RecipeBuilder/IngredientsList.css"
import Button from "../FormElements/Button"
import Ingredient from "./Ingredient"

function IngredientsList() {

    const [number, setNumber] = useState<number>(1)

    return (
        <div className="ingredients-list">
            <h3>Les ingrédients nécessaires :</h3>

            <div className="ingredients">
                <Ingredient />
            </div>

            <Button onClick={() => setNumber(number + 1)} value="Ajouter un ingrédient"/>
        </div>

    )
}

export default IngredientsList