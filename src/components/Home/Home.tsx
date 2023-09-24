import Header from "../Header/Header"
import Cover from "../Cover/Cover"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import Banner from "../../assets/images/hachage-d-herbe.webp"
import "../../styles/Home/Home.css"

function Home() {
    
    return (
        <>
            <Header />
            <Cover type="title" text="CuisineFiesta" src={Banner} alt="Bannière accueil CuisineFiesta"/>
            <Nav />
            <Footer />
        </>
    )
}

export default Home