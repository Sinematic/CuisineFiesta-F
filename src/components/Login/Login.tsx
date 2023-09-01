import { useState } from "react"
import Button from "../Button/Button"
import Input from "../Input/Input"
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy"
import Dropdown from "../Dropdown/Dropdown"
import Notification from "../Notification/Notification"
import "../../styles/Login/Login.css"
import Cover from "../Cover/Cover"
import CoverPicture from "../../assets/images/pates-italiennes-avec-legumes-et-fromage-fondu.webp"

function Login() {

    const [isLogged, /*setIsLogged*/] = useState(false)
    const [page, setPage] = useState("login")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const [displayNotification, setDisplayNotification] = useState({ display: false, type: "information", content: "" })

    const isValidPassword = (password: string) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    }

    const isValidEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    const isValidAge = (birthdate: string) => {
        const currentDate = new Date();
        const birthdateObject = new Date(birthdate);
        const thirteenYearsAgo = new Date(currentDate.getFullYear() - 13, currentDate.getMonth(), currentDate.getDate());
        return birthdateObject <= thirteenYearsAgo;
    }

    const verifyFormInputs = () => {

        if (page === "login") {

            if (!isValidEmail(email) || !isValidPassword(password)) {

                setDisplayNotification({
                    display: true,
                    type: "error",
                    content: "L'email ou le mot de passe n'est pas valide."
                })

                setTimeout(() => setDisplayNotification({ display: false, type: "", content: "" }), 5000)
            }
        }

        if (page === "signup") {

            let sentence = ""

            sentence += !isValidEmail(email) ? "L'email n'est pas valide. " : ""
            sentence += !isValidPassword(password) ? "Le mot de passe n'est pas valide. " : ""
            sentence += !isValidAge(birthdate) ? "Un âge minimal de 13 ans est requis pour utiliser l'application. " : ""
            sentence += !isChecked ? "Vous devez accepter notre politique de confidentialité !" : ""

            setDisplayNotification({
                display: true,
                type: "error",
                content: sentence
            })

            setTimeout(() => setDisplayNotification({ display: false, type: "", content: "" }), 5000)
        }
    }

    const auth = async () => {

        verifyFormInputs()

        if (displayNotification.display === false) {

            const authBody = page === "login" ?  JSON.stringify({
                email: email,
                password
            }) : JSON.stringify({
                email: email,
                password: password,
                birthdate: birthdate
            })

            try {
                const response = await fetch(`http://localhost:3000/api/auth/${page}`, {
                    method: "POST",
                    body: authBody,
                    headers: { "Content-Type": "application/json" }
                })

                if (response.ok) {
                    setDisplayNotification({ display: true, type: "success", content: "Utilisateur créé !" })
                } else setDisplayNotification({ display: true, type: "error", content: "Une erreur non spécifiée est survenue." })
        
            } catch {
                setDisplayNotification({
                    display: true,
                    type: "error",
                    content: "L'email ou le mot de passe n'est pas valide."
                })  
            }
        }
    }

    return (
        <>
            {!isLogged ?
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
                        name="email" label="Email" identifier={email ? "input-filled" : ""}
                        type="email" maxLength={60} />
                        <Input onChange={(e) => setPassword(e.target.value)} value={password} 
                        type="text" identifier={password ? "input-filled" : ""}
                        name="password" label="Mot de passe"  minLength={8} />

                        {page === "signup" ? 
                            <>
                                <Input onChange={(e) => setBirthdate(e.target.value)} name="birthdate" 
                                type="date" identifier={birthdate ? "input-filled" : ""} label="Date de naissance" /> 
                                <Input onChange={() => setIsChecked(!isChecked)} name="policies" 
                                type="checkbox" identifier="policies-wrapper"
                                label="J'accepte la politique de confidentialité" />
                                <Dropdown title="Politique de confidentialité">
                                    <PrivacyPolicy title="false" />
                                </Dropdown>
                            </>
                        : null}

                        <Button onClick={auth} type="button" value={page === "login" ? "Se connecter" : "S'inscrire"} 
                        name={page} identifier="submit-form" />
                    </form>

                    {displayNotification.display ? <Notification type={displayNotification.type} content={displayNotification.content} /> : null}

                </div>

            : null}
        </>
    )
}

export default Login