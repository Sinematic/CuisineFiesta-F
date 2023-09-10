import { useNavigate } from "react-router"
import "../../styles/Header/Header.css"
import Logo from "../../assets/images/logo.svg"

function Header() {

    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    if (!token) navigate("/login")

    return (
        <header>
            <img className="logo" src={Logo} alt="" />
        </header>
    )
}

export default Header