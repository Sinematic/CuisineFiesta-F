import { Fragment } from "react"
import "../../styles/PrivacyPolicy/PrivacyPolicy.css"
import privacyPolicy from "../../assets/privacy-policy.json"

function PrivacyPolicy(props: { title?: "true" | "false" }) {

    return (
        <Fragment>
            <div className="privacy-container">
                {privacyPolicy ? 
                    <Fragment>
                        {props.title === "true" ? <h2>{privacyPolicy.title}</h2> : null}
                        {privacyPolicy.sections.map((section) => 
                            <div className="privacy-section">
                                <h3>{section.title}</h3>
                                <p>{section.content}</p>
                            </div>
                        )}
                    </Fragment>
                : <h2>Impossible de charger le document !</h2>}
            </div>
        </Fragment>

    )
}

export default PrivacyPolicy