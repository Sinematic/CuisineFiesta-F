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

                setTimeout(() => setDisplayNotification({ ...displayNotification, display: false }), 5000)
            }
        }

        if (page === "signup") {
            isValidPassword(password) && isValidEmail(email) && isChecked && isValidAge(birthdate) ? true : false
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

                        <Button onClick={verifyFormInputs} type="button" value={page === "login" ? "Se connecter" : "S'inscrire"} 
                        name={page} identifier="submit-form" />
                    </form>

                    {displayNotification.display ? <Notification type={displayNotification.type} content={displayNotification.content} /> : null}

                </div>

            : null}
        </>
    )
}

export default Login