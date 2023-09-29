import "../../styles/Cover/Cover.css"

function Cover(props: { type: "title" | "text", text: string, src: string, alt: string, format?: string }) {
    return (
        <div className={"cover " + (props.format ? props.format : "")}>

            {props.type === "title" ? <h1 className="text">{props.text}</h1> : null}
            {props.type === "text" ? <p className="text">{props.text}</p> : null}

            <img src={props.src} alt={props.alt} />
            <div className="cover-overlay"></div>
        </div>
    )
}

export default Cover