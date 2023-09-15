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

function RecipeBuilder() {

    const possibleTypes = ["Entrée", "Plat principal", "Dessert", "Autres"]

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
    const [description, setDescription] = useState<string>("")

    return (
        <>
            <Header />
            <div className="recipe-builder">
                <Cover type="title" text="Partager une recette" src={DefaultBanner} alt="" />
            
                <form action="" method="POST">
                    <Input onChange={(e) => setMealName(e.target.value)} value={mealName} 
                    name="name" label="Nom du plat" type="text" minLength={5} maxLength={60}/>
                    <Select name="type" options={possibleTypes} label="Sélectionner le type de plat" />
                    <textarea name="description" 
                    onChange={(e) => setDescription(e.target.value)} 
                    value={description} />
                    <Select name="origin" options={possibleOrigins} label="Sélectionner l'origine du plat" />
                </form>
            </div>

                        {/* <Input onChange={(e) => setEmail(e.target.value)} value={email} 
                        name="email" label="Email" identifier={email ? "input-filled" : ""}
                        type="email" maxLength={60} />

                        <Button onClick={() => auth()} type="button" value={page === "login" ? "Se connecter" : "S'inscrire"} 
                        name={page} identifier="submit-form" />*/}


            <Nav />
            <Footer />
        </>
    )
}

export default RecipeBuilder