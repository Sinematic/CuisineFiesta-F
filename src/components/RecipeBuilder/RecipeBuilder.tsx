import { useState } from "react"
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

function RecipeBuilder() {

    const possibleTypes = [{ 
        type: "Entrée", 
        image: BannerStarter
    }, {
        type: "Plat principal",
        image: BannerMeal
    }, {
        type: "Dessert",
        Image: BannerDessert
    }, { 
        type: "Autres",
        image: DefaultBanner
    }]
      
/*
title //
ingredients
type//
specialutensils
steps
description//
//images//
//videos//
duration //
cost
complexity//
recipeFor (pour combien)//

*/

    const [mealName, setMealName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [duration, setDuration] = useState<string>()
    //const [specialUtensils, setSpecialUtensils] = useState<Array<string>>([])
    //const [ingredients, setIngredients] = useState<Array<{ name: string, amount: number, unit: string }>>()
    const [rate, setRate] = useState<number | null>(null)
    const [mealFor, setMealFor] = useState<string>()

    return (
        <>
            <Header />
            <Cover type="title" text="Partager une recette" src={DefaultBanner} alt="" />
            
            <div className="recipe-builder">

                <form action="" method="POST">

                    <Input onChange={(e) => setMealName(e.target.value)} value={mealName} 
                    type="text" name="name" label="Nom de la recette" minLength={5} maxLength={60}/>
                    <Select options={possibleTypes.map(option => option.type)} 
                    state={type} setter={setType} name="type" label="Type de recette" />
                    <Textarea state={description} setter={setDescription} value={description} 
                    name="description" label="Description de la recette *" />

                    <Input onChange={(e) => setMealFor(e.target.value)} value={mealFor}
                    name="mealFor" type="number" label="Nombre de convives" />
                    <Rate rate={rate} setRate={setRate} />
                    
                    <IngredientsList />

                    <Input onChange={(e) => setDuration(e.target.value)} value={duration} 
                    name="duration" type="number" identifier={duration ? "input-filled" : ""} 
                    label="Temps en minutes" />

                    <Tags />

                    <Button value="Publier la recette" />

                </form>

            </div>

            <Nav />
            <Footer />
        </>
    )
}

export default RecipeBuilder