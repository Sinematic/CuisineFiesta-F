import { useNavigate } from "react-router"
import "../../styles/Header/Header.css"
import Button from "../Button/Button"
import Cover from "../Cover/Cover"
import Banner from "../../assets/images/hachage-d-herbe.webp"

function Header() {

    const token = localStorage.getItem("token")

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        navigate("/login")
    }

    if (!token) navigate("/login")

    return (
        <header>
            <Cover type="title" text="CuisineFiesta" src={Banner} alt="Bannière accueil CuisineFiesta"/>
            <Button identifier="dark-button" value="Se déconnecter" onClick={() => logout()} />
        </header>
    )
}

export default Header