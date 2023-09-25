import premium from "../../assets/files/premium.json"
import "../../styles/Premium/Premium.css"
import Cover from "../Cover/Cover"
import Header from "../Header/Header"
import Nav from "../Nav/Nav"
import Banner from "../../assets/images/legumes-plantes-et-aromates.webp"

function Premium() {

    
    return (
        <>        
            <Header />
            <Cover type="title" text="Abonnement CuisineFiesta" src={Banner} alt="" />
            <main className="premium-page">

                <h1>{premium.maintitle}</h1>

                {premium.content.map((content, index) => (
                    <section key={index}>
                        <h2>{content.section}</h2>

                        {Array.isArray(content.content) ? (
                            <ul>
                                {content.content.map((element, index) => (
                                    <li key={index}>
                                        <h3>{element.title}</h3>
                                        <p>{element.content}</p></li>
                                ))}
                            </ul>
                        ) : <p>{content.content}</p>}      
                    </section>))}
    
                    <p className="conclusion">{premium.conclusion}</p>
            </main>

            <Nav />
        </>

    )
}

export default Premium