import { useEffect, useState } from "react"
import Header from "../Header/Header"
import Cover from "../Cover/Cover"
import Nav from "../Nav/Nav"
import Input from "../FormElements/Input"
import Button from "../FormElements/Button"
import Footer from "../Footer/Footer"
import DefaultBanner from "../../assets/images/macarons-et-café.webp"
import BannerStarter from "../../assets/images/bol-rempli-de-legumes.webp"
import BannerMeal from "../../assets/images/poelee-de-legumes-et-de-viande.webp"
import BannerDessert from "../../assets/images/pommes-et-ustensiles-de-cuisine.webp"
import "../../styles/RecipeBuilder/RecipeBuilder.css"
import Select from "../FormElements/Select"
import Textarea from "../FormElements/Textarea"
import Rate from "../Rate/Rate"
import IngredientsList from "./IngredientsList"
import Tags from "./Tags"
import StepsList from "./StepsList"
import Dropdown from "../Dropdown/Dropdown"
import Guidelines from "../../assets/files/tips-to-write-a-recipe.json"
import DocumentReader from "../DocumentReader/DocumentReader"

function RecipeBuilder() {

    const possibleTypes = ["Entrée", "Plat principal", "Dessert", "Autres"]
      
/*
ingredients
steps
duration //
cost
complexity//

*/

    const [mealName, setMealName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [duration, setDuration] = useState<string>()
    const [ingredients, setIngredients] = useState<Array<{ name: string, amount: string, unit: string }>>([])
    const [rate, setRate] = useState<number | null>(null)
    const [mealFor, setMealFor] = useState<string>("")
    const [steps, setSteps] = useState<Array<string>>([])
    const [cover, setCover] = useState<string>(DefaultBanner)

    useEffect(() => {

        if (type === "Entrée") {
            setCover(BannerStarter)
        } else if (type === "Plat principal") {
            setCover(BannerMeal)
        } else if (type === "Dessert") {
            setCover(BannerDessert)
        } else setCover(DefaultBanner)

    }, [type])

    const submitData = () => {
        console.log("toto")
    }

    return (
        <>
            <Header />
            <Cover type="title" text="Partager une recette" src={cover} alt="" />
            
            <div className="recipe-builder">

                <Dropdown title="Conseils pour écrire une recette" identifier="green bg-white">
                    <DocumentReader document={Guidelines} />
                </Dropdown>

                <form action="" method="POST">

                    <Input onChange={(e) => setMealName(e.target.value)} value={mealName} 
                    type="text" name="name" label="Nom de la recette" minLength={5} maxLength={60}/>
                    
                    <Select options={possibleTypes.map(option => option)} 
                    state={type} setter={setType} name="type" label="Type de recette" />

                    <Textarea state={description} setter={setDescription} value={description} 
                    name="description" label="Description de la recette (facultatif)" maxLength={600} />

                    <IngredientsList ingredients={ingredients} setIngredients={setIngredients} />

                    <StepsList steps={steps} setSteps={setSteps} />

                    <Select name="mealFor" options={["1", "2", "3", "4", "5", "6", "7", "8"]} 
                    state={mealFor} setter={setMealFor} label="Nombre de convives" />

                    <Input onChange={(e) => setDuration(e.target.value)} value={duration} 
                    name="duration" type="number" identifier={duration ? "input-filled" : ""} 
                    label="Temps en minutes" />

                    <Tags />

                    <Rate rate={rate} setRate={setRate} />

                    <Button value="Publier la recette" onClick={submitData} type="submit" />

                </form>

            </div>

            <Nav />
            <Footer />
        </>
    )
}

export default RecipeBuilder