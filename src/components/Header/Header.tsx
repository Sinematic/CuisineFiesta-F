import { useState } from "react"
import useAuthRequirement from "../../state/hooks/useAuthRequirement"
import Notification from "../Notification/Notification"
import "../../styles/Header/Header.css"
import Logo from "../../assets/images/logo-cuisinefiesta.jpg"

function Header() {

    useAuthRequirement()

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
        <header>
            {<img className="logo" src={Logo} alt="" />}
            {notification.type ? <Notification type={notification.type} content={notification.content} /> : null}
        </header>
    )
}

export default Header