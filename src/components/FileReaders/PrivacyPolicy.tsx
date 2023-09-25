import "../../styles/FileReaders/FileReaders.css"
import privacyPolicy from "../../assets/files/privacy-policy.json"

function PrivacyPolicy(props: { title?: "true" | "false" }) {

    return (
        <div className="content-container">
            {privacyPolicy ? 
                <>
                    {props.title === "true" ? <h2>{privacyPolicy.title}</h2> : null}
                    {privacyPolicy.sections.map((section) => 
                        <div key={section.title} className="content-section">
                            <h3>{section.title}</h3>
                            <p>{section.content}</p>
                        </div>
                    )}
                </>
            : <h2>Impossible de charger le document !</h2>}
        </div>
    )
}

export default PrivacyPolicy