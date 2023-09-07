import { useState } from "react"
import Header from "../Header/Header"
import Cover from "../Cover/Cover"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import Notification from "../Notification/Notification"
import Banner from "../../assets/images/hachage-d-herbe.webp"
import "../../styles/Home/Home.css"

function Home() {

    const [notification, setNotification] = useState({ type: "", content: "" })
    const notificationType = localStorage.getItem("notificationType")
    const notificationContent = localStorage.getItem("notificationContent")
    
    const generateNotification = async (type: string, content: string) => {

        if (notificationType && notificationContent) {
            setNotification({ type: notificationType, content: notificationContent})
            localStorage.removeItem("notificationType")
            localStorage.removeItem("notificationContent")
        } else setNotification({ type: type, content: content })

        setTimeout(() => setNotification({ type: "", content: "" }), 3000)
    }
    
    if (notificationType && notificationContent) generateNotification(notificationType, notificationContent)
    
    return (
        <>
            <Header />
            <Cover type="title" text="CuisineFiesta" src={Banner} alt="Bannière accueil CuisineFiesta"/>
            {notification.type ? <Notification type={notification.type} content={notification.content} /> : null}
            <Nav />
            <Footer />
        </>
    )
}

export default Home