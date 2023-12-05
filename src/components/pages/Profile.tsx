import { useEffect, useState } from "react"
import { useNavigate, NavLink } from "react-router-dom"
import Header from "../Header/Header"
import Input from "../FormElements/Input"
import Button from "../FormElements/Button"
import FakeInput from "../FormElements/FakeInput"
import FileInput from "../FormElements/FileInput"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import { Recipe as RecipeInterface } from "../../interfaces/Recipe"
import { User as UserInterface } from "../../interfaces/User"
import "../../styles/pages/Profile.css"
import FakePicture from "../../assets/fake-profile-picture.png"
import PremiumLogo from "../../assets/icons/premium-account.svg"
import FreeLogo from "../../assets/icons/free-account.svg"

function Profile() {

    const navigate = useNavigate()

    const userId = localStorage.getItem("user")

    const userDataString : string | null = localStorage.getItem("userData")
    const userData: UserInterface = userDataString ? JSON.parse(userDataString) : null

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        navigate("/login")
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) navigate("/login")
    }, [])

    const fakeUser = {
        firstname: "Jean",
        lastname: "Dupond",
        email: "jean.dupond@cuisinefiesta.com",
        password: "**********",
        birthdate: "14-07-2000",
        premium: true
    }

    const [firstname, setFirstname] = useState(userData.firstname !== undefined ? userData.firstname : "")
    const [lastname, setLastname] = useState(userData.lastname !== undefined ? userData.lastname : "")
    const [email, setEmail] = useState(userData.email)
    const [password, setPassword] = useState(fakeUser.password)
    const birthdate = userData.birthdate
    const premium = userData.isPremium
    const [isOpen, setIsOpen] = useState(false)
    const [recipes, setRecipes] = useState<RecipeInterface[] | []>([])

    const getUserRecipes = async () => {

        try {
            const response = await fetch(`${import.meta.env.VITE_API_RECIPE}/author/${userId}`)

            if (response.ok) {
                const result = await response.json()
                if (result && result.title) setRecipes([...result])
            }
        } catch(error) {
            console.log(error)
        }
    }

    getUserRecipes()

    return (
        <>
            <Header />
            <div className="profile-page">

                <h1>Mes informations 🍜</h1>
                {recipes && recipes.length > 0 ? recipes.map((recipe) => <li key={recipe._id}>{recipe.title}</li>) : null}                
                <div className="picture-container">
                    <img className="profile-picture" src={FakePicture} alt="" />
                    {fakeUser.premium ? 
                        <div className="icon-wrapper account premium" onClick={() => setIsOpen(!isOpen)}>
                            <img className="profile-badge" src={PremiumLogo} alt="Premium" /> 
                        </div>
                    :   <div className="icon-wrapper account" onClick={() => setIsOpen(!isOpen)}>
                            <img className="profile-badge" src={FreeLogo} alt="Premium" />
                        </div>
                    }

                    <div className="icon-wrapper picture">
                        <FileInput name="file" arialabel="Mettre à jour ma photo de profil" />
                    </div>                 
                </div>

                <form className="profile-form">

                    <Input onChange={(e) => setFirstname(e.target.value)} type="text" 
                    name="firstname" label="Prénom" value={firstname} />

                    <Input onChange={(e) => setLastname(e.target.value)} type="text" 
                    name="lastname" label="Nom" value={lastname} />

                    <Input onChange={(e) => setEmail(e.target.value)} type="email" 
                    name="email" label="E-mail" value={email} />

                    <Input onChange={(e) => setPassword(e.target.value)} type="password"
                    name="password" label="Mot de passe" value={password} />

                    <FakeInput value={birthdate} name="birthdate" label="Date de naissance" />

                    <FakeInput value={premium ? "Premium" : "Essentiel"} name="account" label="Type d'abonnement">
                        <NavLink to={"/premium"}>En savoir plus sur le Premium</NavLink>
                    </FakeInput>
                    
                    <Button identifier="submit-button" value="Mettre à jour mon profil" />
                    <Button identifier="red-button" value="Se déconnecter" onClick={() => logout()} />
                </form>

                {recipes && recipes.length > 0 ? 
                    <ol className="user-recipes has">
                        {recipes.map((recipe : RecipeInterface) => 
                            <li key={recipe.title} 
                            onClick={() => navigate(`/${recipe._id}`)}>
                                {recipe.title}
                            </li>
                        )}
                    </ol>
                : <p className="user-recipes">Vous n'avez pas encore écrit de recettes.</p>}
            </div>

            <Nav />
            <Footer />
        </>
    )
}

export default Profile