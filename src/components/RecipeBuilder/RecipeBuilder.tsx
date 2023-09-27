import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Header from "../Header/Header"
import Cover from "../Cover/Cover"
import Nav from "../Nav/Nav"
import Input from "../FormElements/Input"
import Button from "../FormElements/Button"
import Footer from "../Footer/Footer"
import Select from "../FormElements/Select"
import Textarea from "../FormElements/Textarea"
import Rate from "../Rate/Rate"
import IngredientsList from "./IngredientsList"
import Tags from "./Tags"
import StepsList from "./StepsList"
import Dropdown from "../Dropdown/Dropdown"
import DocumentReader from "../DocumentReader/DocumentReader"
import DefaultBanner from "../../assets/images/macarons-et-café.webp"
import BannerStarter from "../../assets/images/bol-rempli-de-legumes.webp"
import BannerMeal from "../../assets/images/poelee-de-legumes-et-de-viande.webp"
import BannerDessert from "../../assets/images/pommes-et-ustensiles-de-cuisine.webp"
import Guidelines from "../../assets/files/tips-to-write-a-recipe.json"
import "../../styles/RecipeBuilder/RecipeBuilder.css"


function RecipeBuilder() {

    const possibleTypes = ["Entrée", "Plat principal", "Dessert", "Autres"]

    const [mealName, setMealName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [selectedTags, setSelectedTags] = useState<Array<string>>([])
    const [duration, setDuration] = useState<string | null>(null)
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

    const navigate = useNavigate()

    const submitData = async () => {

        if (mealName 
            && type 
            && duration !== null 
            && duration 
            && ingredients.length >= 2 
            && rate 
            && mealFor 
            && steps.length > 0
        ) {

            try {
                const token = localStorage.getItem("token")
                
                const recipeData = {
                    title: mealName,
                    ingredients: [...ingredients],
                    mealType: type,
                    description: description,
                    steps: [...steps],
                    tags: [...selectedTags],
                    time: duration,
                    recipeFor: mealFor,
                    ratings: [{ 
                        userId: localStorage.getItem("userId"), 
                        grade: rate
                    }],
                    authorId: localStorage.getItem("userId")
                }

                const response = await fetch(`http://localhost:3000/api/recipe/`, {
                    method: "POST",
                    body: JSON.stringify(recipeData),
                    headers: { 
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}` 
                    }
                })

                if (response.ok) {
                    navigate("/")
                } else console.log(response)
        
            } catch(error) {
                console.log(error)
            }
        }
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

                    <Input onChange={(e) => setDuration(e.target.value)} value={duration ? duration : ""} 
                    name="duration" type="number" identifier={duration !== null ? "input-filled" : ""} 
                    label="Temps en minutes" minLength={1} maxLength={4} min={1} />

                    <Tags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />

                    <Rate rate={rate} setRate={setRate} />

                    <Button value="Publier la recette" onClick={submitData} type="button" />

                </form>

            </div>

            <Nav />
            <Footer />
        </>
    )
}

export default RecipeBuilder