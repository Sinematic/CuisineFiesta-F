import "../../styles/Cover/Cover.css"

function Cover(props: {type: "title" | "text", text: string, src: string, alt: string }) {
    return (
        <div className="cover">
            
            {props.type === "title" ? <h1>{props.text}</h1> : null}
            {props.type === "text" ? <p>{props.text}</p> : null}

            <img src={props.src} alt={props.alt} />
            <div className="cover-overlay"></div>
        </div>
    )
}

export default Cover