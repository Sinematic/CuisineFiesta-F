import "../../styles/Notification/Notification.css"

function Notification(props: { type: string, content: string }) {
    // Expected Types : "error", "success", "warning", "information"

    const formattedText = props.content.replace(/(\.|!)(?=\w)/g, '$1 ');

    return (   
        <div className={"notification " + props.type}>
            {props.type === "error" ? <span>Erreur !</span> : null}
            <p>{formattedText}</p>
        </div>
    )
}

export default Notification