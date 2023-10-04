import { SetStateAction, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Button from "../FormElements/Button"
import Input from "../FormElements/Input"
import Dropdown from "../Dropdown/Dropdown"
import Notification from "../Notification/Notification"
import "../../styles/AccessControl/AccessControl.css"
import Cover from "../Cover/Cover"
import CoverPicture from "../../assets/images/pates-italiennes-avec-legumes-et-fromage-fondu.webp"
import PrivacyPolicy from "../../assets/files/privacy-policy.json"
import DocumentReader from "../DocumentReader/DocumentReader"

function AccessControl() {

    const [page, setPage] = useState("login")
    const [isLoading, setIsLoading] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const [notification, setNotification] = useState({ type: "", content: "" })
    const [token, setToken] = useState<string>("")

    const navigate = useNavigate()

    useEffect(() => {
        setToken(localStorage.getItem("token") as string)
        if (token && !isLoading) navigate("/")
    }, [token])

    const isValidPassword = (password: string) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    }

    const isValidEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email)
    }

    const isValidAge = (birthdate: string) => {
        const currentDate = new Date()
        const userBirthdate = new Date(birthdate)
        const thirteenYearsAgo = new Date(currentDate.getFullYear() - 13, currentDate.getMonth(), currentDate.getDate())
        return userBirthdate <= thirteenYearsAgo        
    }

    const verifyFormInputs = () => {

        if (page === "signup") {

            setIsLoading(true)
            let sentence : string = "";

            sentence += !isValidEmail(email) ? "L'email n'est pas valide. " : ""
            sentence += !isValidPassword(password) ? "Le mot de passe doit contenir au moins 8 caractères dont 1 majuscule et 1 chiffre. " : ""
            sentence += !isValidAge(birthdate) ? "Un âge minimal de 13 ans est requis pour utiliser l'application. " : ""
            sentence += !isChecked ? "Vous devez accepter notre politique de confidentialité !" : ""

            setIsLoading(false)
            if (sentence) generateNotification("error", sentence)
        }
    }

    const generateNotification = (type: string, content: string) => {
        setNotification({ type: type, content: content })
        setTimeout(() => setNotification({ type: "", content: "" }), 3000)
    }

    const auth = () => page === "login" ? authLogin() : authSignup()

    const authSignup = async () => {
        setNotification({ type: "", content: "" })
        verifyFormInputs()

        if (!notification.content) {

            const body = JSON.stringify({
                email: email,
                password: password,
                birthdate: birthdate
            })

            try {
                const response = await fetch(`http://localhost:3000/api/auth/signup`, {
                    method: "POST",
                    body: body,
                    headers: { "Content-Type": "application/json" }
                })

                if (response.ok) {
                    localStorage.setItem("notificationType", "success")
                    localStorage.setItem("notificationContent", "Utilisateur créé !")
                    navigate("/")
                } else generateNotification("error", "Une erreur non spécifiée est survenue.")
        
            } catch {
                generateNotification("error", "L'email ou le mot de passe n'est pas valide.")  
            }
        }
    }

    const authLogin = async () => {

        setNotification({ type: "", content: "" })
        verifyFormInputs()

        if (!notification.content) {

            const body = JSON.stringify({ email: email, password: password })

            try {
                const response = await fetch(`http://localhost:3000/api/auth/login`, {
                    method: "POST",
                    body: body,
                    headers: { "Content-Type": "application/json" }
                })

                if (response.ok) {
                    setIsLoading(true)
                    localStorage.setItem("notificationType", "succes")
                    localStorage.setItem("notificationContent", "Connexion effectuée !")
                    const data = await response.json()
                    localStorage.setItem("user",  data.userId)
                    localStorage.setItem("token", data.token)
                    setToken(localStorage.getItem("token") as string)
                    setIsLoading(false)
                } else generateNotification("error", "Identifiants incorrects !")
        
            } catch {
                generateNotification("error", "Une erreur non spécifiée est survenue.") 
            }
        }
    }

    return (
        <>
            {!token ?
                <div className="session-form">
                    <Cover type="title" text="CuisineFiesta" src={CoverPicture} 
                    alt="Pâtes italiennes avec légumes et fromage fondu" />

                    <div className="bar-state">
                        <Button value="Connexion" onClick={() => setPage("login")} 
                        identifier={(page ===  "login" ? "active-page" : "") + " button-page"} />
                        <Button value="Inscription" onClick={() => setPage("signup")}
                        identifier={(page ===  "signup" ? "active-page" : "") + " button-page"}  />
                        <div className="filler-beige"></div>
                    </div>

                    <form action="" method="POST">
                        
                        <Input onChange={(e) => setEmail(e.target.value)} value={email} 
                        name="email" label="Email"
                        type="email" maxLength={60} />

                        <Input onChange={(e) => setPassword(e.target.value)} value={password} 
                        type="password" name="password" label="Mot de passe" minLength={8} />

                        {page === "signup" ? 
                            <>
                                <Input onChange={(e) => setBirthdate(e.target.value)} name="birthdate" 
                                type="date" label="Date de naissance" /> 

                                <Input onChange={() => setIsChecked(!isChecked)} name="policies" 
                                type="checkbox" identifier="policies-wrapper"
                                label="J'accepte la politique de confidentialité" />

                                <Dropdown title="Politique de confidentialité">
                                    <DocumentReader document={PrivacyPolicy} />
                                </Dropdown>
                            </>
                        : null}

                        <Button onClick={() => auth()} type="button" identifier="submit-form"
                        value={page === "login" ? "Se connecter" : "S'inscrire"} name={page} />
                    </form>

                    {notification.type && !isLoading ? 
                        <Notification type={notification.type} content={notification.content} /> 
                    : null}

                </div>
            : null}
        </>
    )
}

export default AccessControl