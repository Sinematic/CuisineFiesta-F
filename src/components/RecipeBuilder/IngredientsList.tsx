import { v4 as uuidv4 } from 'uuid'
import "../../styles/RecipeBuilder/IngredientsList.css"
import Ingredient from "./Ingredient"

function IngredientsList(props: {
    ingredients: Array<{ name: string; amount: string; unit: string }>;
    setIngredients: React.Dispatch<React.SetStateAction<Array<{ name: string; amount: string; unit: string }>>>;
}) {

    const deleteSelf = (index : number) => {
        const tempArray = [...props.ingredients]
        tempArray.splice(index, 1)
        props.setIngredients(tempArray)
    }


    return (
        <div className="ingredients-list">
            <h3>Ingrédients nécessaires :</h3>

            <Ingredient key={uuidv4()} ingredients={props.ingredients} 
            setIngredients={props.setIngredients} />

            {props.ingredients.length > 0 ? <ul className="ingredients">
                {props.ingredients.map((ingredient, index) => 
                <li key={ingredient.name}>
                    <span>{ingredient.name}: {ingredient.amount} x {ingredient.unit}</span>
                    <div className="trash" onClick={() => deleteSelf(index)}>
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
            </ul>: null}
        </div>
    )
}

export default IngredientsList