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


    const [mealName, setMealName] = useState<string>("")
    const [description, setDescription] = useState<string | undefined>("")
    const [type, setType] = useState<string | undefined>("")
    const [origin, setOrigin] = useState<string | undefined>("")

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
                    name="description" label="Ajouter une description du plat" />
                    {description}
                    <Select name="origin" options={possibleOrigins} state={origin} 
                    setter={setOrigin} label="Sélectionner l'origine du plat" />
                    <Button value="Publier la recette" />
                </form>
            </div>

            <Nav />
            <Footer />
        </>
    )
}

export default RecipeBuilder