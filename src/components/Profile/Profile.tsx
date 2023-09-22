import { useState } from "react"
import { useNavigate, NavLink } from "react-router-dom"
import Input from "../FormElements/Input"
import Button from "../FormElements/Button"
import FakeInput from "../FormElements/FakeInput"
import FileInput from "../FormElements/FileInput"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import "../../styles/Profile/Profile.css"
import FakePicture from "../../assets/fake-profile-picture.png"
import PremiumLogo from "../../assets/icons/premium-account.svg"
import FreeLogo from "../../assets/icons/free-account.svg"

function Profile() {

    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        navigate("/login")
    }

    if (!token) navigate("/login")

    const fakeUser = {
        firstname: "Maxime",
        lastname: "Rache",
        email: "maxime@gmail.com",
        password: "**********",
        birthdate: "07-11-1995",
        premium: true
    }

    const [firstname, setFirstname] = useState(fakeUser.firstname)
    const [lastname, setLastname] = useState(fakeUser.lastname)
    const [email, setEmail] = useState(fakeUser.email)
    const [password, setPassword] = useState(fakeUser.password)
    const birthdate = fakeUser.birthdate
    const premium = fakeUser.premium
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="profile-page">

                <h1>Mes informations 🍜</h1>
                
                <div className="picture-container">
                    <img className="profile-picture" src={FakePicture} alt="" />
                    {fakeUser.premium ? 
                        <div className="icon-wrapper account premium" onClick={() => setIsOpen(!isOpen)}>
                            <img className="profile-badge" src={PremiumLogo} alt="Premium" /> 
                        </div>
                    :   <div className="icon-wrapper account" onClick={() => setIsOpen(!isOpen)}>
                            <img className="profile-badge" src={FreeLogo} alt="Premium" />
                        </div>
                    }

                    <div className="icon-wrapper picture">
                        <FileInput name="file" label="Mettre à jour ma photo de profil" />
                    </div>                 
                </div>

                <form className="profile-form">

                    <Input onChange={(e) => setFirstname(e.target.value)} type="text" name="firstname"
                    identifier={firstname ? "input-filled" : ""}  label="Prénom" value={firstname} />

                    <Input onChange={(e) => setLastname(e.target.value)} type="text" name="lastname"
                    identifier={lastname ? "input-filled" : ""}  label="Nom"  value={lastname} />

                    <Input onChange={(e) => setEmail(e.target.value)} type="email" name="email"
                    identifier={email ? "input-filled" : ""} label="E-mail" value={email} />

                    <Input onChange={(e) => setPassword(e.target.value)} type="password" name="password"
                    identifier={password ? "input-filled" : ""}  label="Mot de passe" value={password} />

                    <FakeInput value={birthdate} name="birthdate" label="Date de naissance" />

                    <FakeInput value={premium ? "Premium" : "Essentiel"} name="account" label="Type d'abonnement">
                        <NavLink to={"/premium"}>En savoir plus sur le Premium</NavLink>
                    </FakeInput>
                    
                    <Button identifier="submit-button" value="Mettre à jour mon profil" />
                    <Button identifier="red-button" value="Se déconnecter" onClick={() => logout()} />
                </form>
            </div>

            <Nav />
            <Footer />
        </>
    )
}

export default Profile