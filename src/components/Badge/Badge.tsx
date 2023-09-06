import "../../styles/Badge/Badge.css"

function Badge(props: { type: string }) {

    return (
        <div className={`badge ${props.type}`}></div>
    )
}

export default Badge