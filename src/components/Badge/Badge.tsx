import "../../styles/Badge/Badge.css"

function Badge(props: { type: string }) {
    
    //Valeurs acceptées : green, red, blue, golden
    return (
        <div className={`badge ${props.type}`}></div>
    )
}

export default Badge