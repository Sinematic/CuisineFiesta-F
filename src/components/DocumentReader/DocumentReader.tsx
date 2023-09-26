import "../../styles/DocumentReader/DocumentReader.css"

function DocumentReader(props: { document: { 
    title?: string, sections: { title: string, content: string, warning?: string}[] 
}}) {

    const { document } = props

    return (
        <div className="content-container">
            {document ?
                <>
                    {document.title ? <h2>{document.title}</h2> : null}
                    {document.sections.map((section) => 
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

export default DocumentReader