import { useEffect, useState, /*ChangeEvent */} from "react"
import { useNavigate } from "react-router"
import Header from "../Header/Header"
import Cover from "../Cover/Cover"
import Nav from "../Nav/Nav"
import Input from "../FormElements/Input"
//import FileInput from "../FormElements/FileInput"
import Button from "../FormElements/Button"
import Footer from "../Footer/Footer"
import Select from "../FormElements/Select"
import Textarea from "../FormElements/Textarea"
import Rate from "../Rate/Rate"
import IngredientsList from "../RecipeBuilder/IngredientsList"
import Tags from "../RecipeBuilder/Tags"
import StepsList from "../RecipeBuilder/StepsList"
import Dropdown from "../Dropdown/Dropdown"
import DocumentReader from "../DocumentReader/DocumentReader"
import DefaultBanner from "../../assets/images/macarons-et-café.webp"
import BannerStarter from "../../assets/images/bol-rempli-de-legumes.webp"
import BannerMeal from "../../assets/images/poelee-de-legumes-et-de-viande.webp"
import BannerDessert from "../../assets/images/pommes-et-ustensiles-de-cuisine.webp"
import Meat from "../../assets/images/viande-crue-et-assaisonnement.webp"
import Guidelines from "../../assets/files/tips-to-write-a-recipe.json"
import Notification from "../Notification/Notification"
import "../../styles/pages/CreateRecipe.css"


function CreateRecipe() {

    const possibleTypes = ["Entrée", "Plat principal", "Dessert", "Viande", "Accompagnement"]

    const [mealName, setMealName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [selectedTags, setSelectedTags] = useState<Array<string>>([])
    const [duration, setDuration] = useState<string | null>(null)
    const [ingredients, setIngredients] = useState<Array<{ name: string, amount: string, unit: string }>>([])
    const [rate, setRate] = useState<number | null>(null)
    const [mealFor, setMealFor] = useState<string>("")
    const [steps, setSteps] = useState<Array<string>>([])
    //const [image, setImage] = useState<File | null>(null)
    const [cover, setCover] = useState<string>(DefaultBanner)

    const [notification, setNotification] = useState({ type: "", content: "" })

    const drafts = localStorage.getItem("draft-recipe")

    console.log(localStorage.getItem("draft-recipe"))
    
/*

    useEffect(() => {

        if (localStorage.getItem("draft-recipe") !== "" )

        if (mealName !== "" || description !== "" || steps[0] !== "" || ingredients[0].name !== "") {

            setInterval(() => {
                const recipeDraft = {
                    title: mealName ,
                    ingredients: [...ingredients],
                    mealType: type,
                    description: description,
                    steps: [...steps],
                    tags: [...selectedTags],
                    time: duration,
                    recipeFor: mealFor,
                    ratings: [{ 
                        grade: rate
                    }],
                }
                localStorage.setItem("draft-recipe", JSON.stringify(recipeDraft))

                console.log(localStorage.getItem("draft-recipe"))
            }, 15000)
        }
    }, [])*/

/*
    const handleFileChange = (e : ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0];
        if (file) setImage(file)
        console.log(file)
    }
*/
    useEffect(() => {

        if (type === "Entrée") {
            setCover(BannerStarter)
        } else if (type === "Plat principal") {
            setCover(BannerMeal)
        } else if (type === "Dessert") {
            setCover(BannerDessert)
        } else if (type === "Viande") {
            setCover(Meat)
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
/*
            if (!image) {
                console.log("pas d'image")
            } else {*/
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
    
                    const response = await fetch(`${import.meta.env.VITE_API_RECIPE}/`, {
                        method: "POST",
                        body: JSON.stringify(recipeData),
                        headers: { 
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}` 
                        }
                    })
    
                    /*
    
                    const bodyFormData = new FormData();

                    bodyFormData.append('recipe', JSON.stringify(recipeData));
                    if (image instanceof Blob) bodyFormData.append('image', image);
    
                    const response = await fetch(`${import.meta.env.VITE_API_RECIPE}/`, {
                        method: "POST",
                        body: bodyFormData,
                        headers: { 
                            "Authorization": `Bearer ${token}`,
                        }
                    })*/
    
                    if (response.ok) navigate("/")
            
                } catch(error) {
                    console.log(error)
                }
          /*  }*/


        } else {

            let sentence : string = "Il faut renseigner "

            const properties: Record<string, string> = {
                mealName: "le titre",
                type: "le type de recette",
                duration: "le temps de préparation",
                ingredients: "2 ingrédients ou plus",
                rate: "une note",
                mealFor: "le nombre de convives",
                steps: "une étape de préparation ou plus"
            }
            
            if (!mealName) sentence += properties.mealName + ", "
            if (!type || type === null) sentence += properties.type + ", "
            if (!duration) sentence += properties.duration + ", "
            if (ingredients.length < 2) sentence += properties.ingredients + ", "
            if (!rate) sentence += properties.rate + ", "
            if (!mealFor) sentence += properties.mealFor + ", "
            if (steps.length < 1) sentence += properties.steps

            sentence += " !"

            setNotification({ type: "error", content: sentence })
            setTimeout(() => setNotification({ type: "", content: "" }), 3000)
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

                {drafts !== null ? 
                    <div className="drafts-box">📑</div> 
                : ""}    

                <form action="" method="POST">

                    <Input onChange={(e) => setMealName(e.target.value)} value={mealName} 
                    type="text" name="name" label="Nom de la recette" minLength={5} maxLength={60}/>
                    
                    <Select options={possibleTypes.map(option => option)} 
                    state={type} setter={setType} name="type" label="Type de recette" />

                    <Textarea state={description} setter={setDescription} value={description} 
                    name="description" label="Description de la recette (facultatif)" maxLength={600} />

                    {/* <FileInput name="file" onChange={(e) => handleFileChange(e)} arialabel="Mettre à jour ma photo de profil" /> */}

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

                    {notification.type ? <Notification type={notification.type} content={notification.content} /> : null}

                </form>
            </div>

            <Nav />
            <Footer />
        </>
    )
}

export default CreateRecipe