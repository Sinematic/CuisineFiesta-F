import { Fragment, useState } from 'react';
import Button from "../Button/Button"
import Input from "../Input/Input"
import "../../styles/Login/Login.css"
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

function Login() {

    const [isLogged, /*setIsLogged*/] = useState(false)
    const [page, setPage] = useState("login")
    const [isOpen, setIsOpen] = useState(false)

    const [isChecked, setIsChecked] = useState(false)

    const verifyForm = () => {
        isChecked ? <p>Création du compte en cours</p> : <p>Vous devez accepter notre politique de confidentialité !</p>
    }

    return (
        <Fragment>
            {!isLogged ?
                <div className="register-container">
                    <h1>{page === "login" ? "Connexion" : "Inscription"} à CuisineFiesta App</h1>
                    <form action="" method="POST" className={page + "-form"}>
                        <Input name="email" placeholder="Email" type="text" maxLength={60} />
                        <Input name="password" placeholder="Mot de passe" type="text" minLength={8}/>
                        {page === "signup" ? 
                            <Fragment>
                                <Input name="birthDate" type="date" /> 

                                <div className='policies-wrapper'>
                                    <Button 
                                        onClick={() => setIsOpen(!isOpen)} 
                                        identifier="dark-button" 
                                        value="Politique de confidentialité" 
                                    />
                                    <Input onChange={() => setIsChecked(!isChecked)} name="policies" type="checkbox" required="true" />
                                </div>
                               
                                {isOpen ? <PrivacyPolicy isOpen={isOpen} /> : null}
                            </Fragment>
                        : null}
                        <Button  name={page} type="submit" onClick={() => verifyForm} value={page === "login" ? "Se connecter" : "S'inscrire"} />
                        
                    </form>

                    <div className="switch-form">
                        <button onClick={() => setPage("login")} className={page === "login" ? "active" : ""}>
                            Connexion
                        </button>
                        <button onClick={() => setPage("signup")} className={page === "signup" ? "active" : ""}>
                            Inscription
                        </button>
                    </div>
                </div>
            : null}
        </Fragment>
    )
}

export default Login