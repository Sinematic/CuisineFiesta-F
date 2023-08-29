import { Fragment, useState } from 'react';
import Button from "../Button/Button"
import Input from "../Input/Input"
import "../../styles/Login/Login.css"
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import Dropdown from '../Dropdown/Dropdown';

function Login() {

    const [isLogged, /*setIsLogged*/] = useState(false)
    const [page, setPage] = useState("login")

    const [isChecked, setIsChecked] = useState(false)

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
                        <Button  name={page} type="button" value={page === "login" ? "Se connecter" : "S'inscrire"} />
                        
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