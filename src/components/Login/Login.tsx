import { Fragment, useState } from 'react';
import Button from "../Button/Button"
import Input from "../Input/Input"
import "../../styles/Login/Login.css"

function Login() {

    const [isLogged, setIsLogged] = useState(false)
    const [page, setPage] = useState("login")

    return (
        <Fragment>
            {!isLogged ?
                <div className="register-container">

                    <form action="" method="POST" className={page + "-form"}>
                        <Input name="email" placeholder="Email" type="text" maxLength={60} />
                        <Input name="password" placeholder="Mot de passe" type="text" minLength={8}/>
                        {page === "signup" ? <Input name="birthDate" type="date" /> : null }
                        <Button value={page === "login" ? "Se connecter" : "S'inscrire"} name={page} type="button" />
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