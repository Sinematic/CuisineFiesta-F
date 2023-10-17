import { useEffect } from "react"
import { useNavigate } from "react-router"

function useAuthRequirement() {

    const navigate = useNavigate()    

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) navigate("/login") 
    }, [])

    return null
}

export default useAuthRequirement