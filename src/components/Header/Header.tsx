import { useNavigate } from "react-router"
import "../../styles/Header/Header.css"
import Button from "../Button/Button"
import Logo from "../../assets/images/logo.svg"

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
            <img className="logo" src={Logo} alt="" />
            <Button identifier="dark-button" value="Se déconnecter" onClick={() => logout()} />
        </header>
    )
}

export default Header