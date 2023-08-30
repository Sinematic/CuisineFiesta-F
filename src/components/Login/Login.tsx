import { Fragment, useState } from 'react';
import Button from "../Button/Button"
import Input from "../Input/Input"
import "../../styles/Login/Login.css"
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import Dropdown from '../Dropdown/Dropdown';

function Login() {

    const [isLogged, /*setIsLogged*/] = useState(false)
    const [page, setPage] = useState("login")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [isChecked, setIsChecked] = useState("")

    const isValidPassword = (password: string) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    }

    const isValidEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    const verifyFormInputs = () => {
        if (page === "login") {
            isValidPassword(password) && isValidEmail(email) ? true : false
        }

        if (page === "signup") {
            isValidPassword(password) && isValidEmail(email) ? true : false
        }
    }


    return (
        <Fragment>
            {!isLogged ?
                <div className="register-container">

                    {"Email : " + email}
                    {"Password : " + password}
                    {"isChecked : " + isChecked}
                    {"BirthDate : " + birthDate}

                    <h1>CuisineFiesta App 🍽️</h1>
                    <form action="" method="POST" className={page + "-form"}>
                        <Input onChange={(e) => setEmail(e.target.value)} value={email} 
                        name="email" placeholder="Email" type="email" maxLength={60} />
                        <Input onChange={(e) => setPassword(e.target.value)} value={password} 
                        name="password" placeholder="Mot de passe" type="text" minLength={8}/>
                        {page === "signup" ? 
                            <Fragment>
                                <Input onChange={(e) => setBirthDate(e.target.value)} name="birthDate" type="date" /> 
                                <Dropdown title="Politique de confidentialité">
                                    <PrivacyPolicy title="false" />

                                    <div className="accept-policies">
                                        <label htmlFor="policies">
                                            J'accepte la politique de confidentialité :
                                        </label>
                                        <Input onChange={(e) => setIsChecked(e.target.value)} name="policies" type="checkbox" />
                                    </div>
                                </Dropdown>

                            </Fragment>
                        : null}
                        <Button onClick={verifyFormInputs} name={page} type="button" value={page === "login" ? "Se connecter" : "S'inscrire"} />
                    </form>

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