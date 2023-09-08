import premium from "../../assets/premium.json"
import "../../styles/Premium/Premium.css"
import Header from "../Header/Header"
import Nav from "../Nav/Nav"

function Premium() {

    
    return (
        <>        
            <Header />
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
            </main>

            <Nav />
        </>

    )
}

export default Premium