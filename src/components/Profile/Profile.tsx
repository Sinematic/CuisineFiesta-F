import { useState } from "react"
import { useNavigate, NavLink } from "react-router-dom"
import Input from "../Input/Input"
//import FakeInput from "../FakeInput/FakeInput"
import Button from "../Button/Button"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import "../../styles/Profile/Profile.css"
import FakePicture from "../../assets/fake-profile-picture.png"
import PremiumLogo from "../../assets/icons/premium-account.svg"
import FreeLogo from "../../assets/icons/free-account.svg"
import FakeInput from "../FakeInput/FakeInput"

function Profile() {

    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        navigate("/login")
    }

    if (!token) navigate("/login")
            
    const think = () => {}

    const fakeUser = {
        firstname: "Maxime",
        lastname: "Rache",
        email: "maxime@gmail.com",
        password: "**********",
        birthdate: "07-11-1995",
        premium: true
    }

    const [firstname/*, /*setfirstname*/] = useState(fakeUser.firstname)
    const [lastname/*, /*setlastname*/] = useState(fakeUser.lastname)
    const [email/*, setemail*/] = useState(fakeUser.email)
    const [password/*, setpassword*/] = useState(fakeUser.password)
    const [birthdate/*, setbirthdate*/] = useState(fakeUser.birthdate)
    const [premium/*, setsubscription*/] = useState(fakeUser.premium)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="profile-page"><svg
  xmlns="http://www.w3.org/2000/svg"
  width="100"
  height="100"
  viewBox="0 0 100 100"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <rect x="20" y="30" width="60" height="60" rx="10" ry="10" />
  <line x1="50" y1="30" x2="50" y2="90" />
  <line x1="30" y1="50" x2="70" y2="50" />
</svg>


                <h1>Mes informations 🍜</h1>
                <div className="picture-container">
                    <img className="profile-picture" src={FakePicture} alt="" />
                    {fakeUser.premium ? 
                        <div className="icon-wrapper premium" onClick={() => setIsOpen(!isOpen)}>
                            <img className="profile-badge" src={PremiumLogo} alt="Premium" /> 
                        </div>
                    :   <div className="icon-wrapper" onClick={() => setIsOpen(!isOpen)}>
                            <img className="profile-badge" src={FreeLogo} alt="Premium" />
                        </div>
                    }
                </div>

                <form className="profile-form">
                    <Input onChange={() => think()} identifier={firstname ? "input-filled" : ""} type="text" name="firstname" label="Prénom" value={firstname} />
                    <Input onChange={() => think()} identifier={lastname ? "input-filled" : ""} type="text" name="lastname" label="Nom"  value={lastname} />
                    <Input onChange={() => think()} identifier={email ? "input-filled" : ""} type="email" name="email" label="E-mail" value={email} />
                    <Input onChange={() => think()} identifier={password ? "input-filled" : ""} type="password" name="password" label="Mot de passe" value={password} />
                    <FakeInput value={birthdate} name="birthdate" label="Date de naissance" />
                    <Input onChange={() => think()} type="file" name="file" label="Mettre à jour ma photo de profil" />
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