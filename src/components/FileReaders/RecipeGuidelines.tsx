import "../../styles/FileReaders/FileReaders.css"
import Guidelines from "../../assets/files/tips-to-write-a-recipe.json"

function RecipeGuidelines() {

    return (
        <div className="content-container">
            {Guidelines ? 
                <>
                    <h2>{Guidelines.title}</h2>
                    {Guidelines.sections.map((section) => 
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

export default RecipeGuidelines