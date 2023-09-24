import { useEffect, useState } from "react"
import "../../styles/RecipeBuilder/IngredientsList.css"
import Button from "../FormElements/Button"
import Ingredient from "./Ingredient"

function IngredientsList() {

    const [number, setNumber] = useState<Array<number>>([1])


    return (
        <div className="ingredients-list">
            <h3>Ingrédients nécessaires :</h3>

            <div className="ingredients">
                {number.forEach(element => {
                    <Ingredient index={element} />
                })}
            </div>

            <Button onClick={() => setNumber([...number, number[-1] + 1])} value="Ajouter un autre ingrédient"/>
        </div>

    )
}

export default IngredientsList