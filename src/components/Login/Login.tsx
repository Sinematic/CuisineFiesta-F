import { Fragment, useState } from "react"
import Button from "../Button/Button"
import Input from "../Input/Input"
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy"
import Dropdown from "../Dropdown/Dropdown"
import Notification from "../Notification/Notification"
import "../../styles/Login/Login.css"

function Login() {

    const [isLogged, /*setIsLogged*/] = useState(false)
    const [page, setPage] = useState("login")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthdate, setbirthdate] = useState("")
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
        <Fragment>
            {!isLogged ?
                <div className="register-container">

                    <h1>CuisineFiesta App 🍽️</h1>
                    <form action="" method="POST" className={page + "-form"}>
                        <Input onChange={(e) => setEmail(e.target.value)} value={email} 
                        name="email" placeholder="Email" type="email" maxLength={60} />
                        <Input onChange={(e) => setPassword(e.target.value)} value={password} 
                        name="password" placeholder="Mot de passe" type="text" minLength={8}/>
                        {page === "signup" ? 
                            <Fragment>
                                <Input onChange={(e) => setbirthdate(e.target.value)} name="birthdate" type="date" /> 
                                <Dropdown title="Politique de confidentialité">
                                    <PrivacyPolicy title="false" />

                                    <div className="accept-policies">
                                        <label htmlFor="policies">
                                            J'accepte la politique de confidentialité :
                                        </label>
                                        <Input onChange={() => setIsChecked(!isChecked)} name="policies" type="checkbox" />
                                    </div>
                                </Dropdown>

                            </Fragment>
                        : null}
                        <Button onClick={verifyFormInputs} name={page} type="button" value={page === "login" ? "Se connecter" : "S'inscrire"} />
                    </form>

                    {displayNotification.display ? <Notification type={displayNotification.type} content={displayNotification.content} /> : null}

                    <div className="switch-form">
                        {page === "login" ? 
                            <button onClick={() => setPage("signup")}>
                                Inscription
                            </button>
                        : 
                            <button onClick={() => setPage("login")}>
                                Connexion
                            </button>
                        }
                    </div>
                </div>

            : null}
        </Fragment>
    )
}

export default Login