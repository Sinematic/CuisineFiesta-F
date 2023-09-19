import { useState } from "react"
import Header from "../Header/Header"
import Cover from "../Cover/Cover"
import Nav from "../Nav/Nav"
import Input from "../Input/Input"
import Button from "../Button/Button"
import Footer from "../Footer/Footer"
import DefaultBanner from "../../assets/images/macarons-et-café.webp"
import BannerStarter from "../../assets/images/bol-rempli-de-legumes.webp"
import BannerMeal from "../../assets/images/poelee-de-legumes-et-de-viande.webp"
import BannerDessert from "../../assets/images/pommes-et-ustensiles-de-cuisine.webp"
import "../../styles/RecipeBuilder/RecipeBuilder.css"
import Select from "../Select/Select"
import Textarea from "../Textarea/Textarea"
import Dropdown from "../Dropdown/Dropdown"

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

    const possibleOrigins = [
        "Française",
        "Italienne",
        "Mexicaine",
        "Chinoise",
        "Indienne",
        "Japonaise",
        "Grecque",
        "Espagnole",
        "Thaïlandaise",
        "Marocaine",
        "Libanaise",
        "Brésilienne",
        "Américaine (États-Unis)",
        "Allemande",
        "Russe",
        "Coréenne",
        "Vietnamienne",
        "Turque",
        "Britannique",
        "Australienne",
        "Caribéenne",
        "Péruvienne",
        "Argentine",
        "Égyptienne",
        "Sud-africaine"
    ]

    const units = [
        "Millilitres (mL)",
        "Centilitres (cL)",
        "Litres (L)",
        "Cuillères à soupe (c. à s.)",
        "Cuillères à café (c. à c.)",
        "Milligrammes (mg)",
        "Grammes (g)",
        "Kilogrammes (kg)",
        "Pincées",
        "Cuillères à soupe (c. à s.)",
        "Cuillères à café (c. à c.)",
        "Pièces",
        "Onces (oz)"
      ];
      
/*
title //
ingredients
type
specialutensils
steps
description
//images
//videos
time
cost
origin
complexity
isvegan
recipeFor (pour combien)

*/

    const [mealName, setMealName] = useState<string>("")
    const [description, setDescription] = useState<string | undefined>("")
    const [type, setType] = useState<string | undefined>("")
    const [origin, setOrigin] = useState<string | undefined>("")
    const [specialUtensils, setSpecialUtensils] = useState<Array<string>>([])
    const [ingredients, setIngredients] = useState<Array<{ name: string, amount: number, unit: string }>>()
    const [isVegan, setIsVegan] = useState<string | undefined>(undefined)


    return (
        <>
            <Header />
            <Cover type="title" text="Partager une recette" src={DefaultBanner} alt="" />
            
            <div className="recipe-builder">

                <form action="" method="POST">

                    <Input onChange={(e) => setMealName(e.target.value)} value={mealName} 
                    name="name" label="Nom du plat" type="text" minLength={5} maxLength={60}/>
                    <Select name="type" options={possibleTypes.map(option => option.type)} 
                    state={type} setter={setType} label="Sélectionner le type de plat" />
                    <Textarea state={description} setter={setDescription} value={description} 
                    name="description" label="Ajouter la description du plat" />
                    <Select name="origin" options={possibleOrigins} state={origin} 
                    setter={setOrigin} label="Sélectionner l'origine du plat" />
                    
                    {/* <Input  /> */}

                    <div className="is-vegan-wrapper">
                        <p>La recette est-elle végane ?</p>
                        <Input type="radio" name="isVegan" label="Oui" />
                        <Input type="radio" name="isVegan" label="Non" />
                        <Input type="radio" name="isVegan" label="Non, mais il est possible de l'adapter" />
                    </div>

                    <Dropdown title="Qu'est-ce que le véganisme ?">
                        <p>Le véganisme est un mode de vie qui exclut toute utilisation d'animaux 
                        à des fins alimentaires, vestimentaires ou autres, ainsi que tout 
                        produit d'origine animale.</p>
                        <p>Le véganisme exclut donc l'utilisation d'ingrédients tels que la viande, 
                        les produits laitiers, les œufs, le miel, la gélatine, et d'autres dérivés 
                        animaux dans l'alimentation et les produits de tous les jours.</p>
                    </Dropdown>

                    <Button value="Publier la recette" />

                </form>

            </div>

            <Nav />
            <Footer />
        </>
    )
}

export default RecipeBuilder