import "../../styles/RecipeBuilder/Tags.css"
import TagElement from "./TagElement"

function Tags(props : { 
    selectedTags: Array<string>, 
    setSelectedTags: React.Dispatch<React.SetStateAction<Array<string>>>
}) {

    const tags = [
        {
            name: "Bon pour la santé",
            color: "green"
        }, {
            name: "À partager",
            color: "green"
        }, {
            name: "Végétarien",
            color: "green"
        }, {
            name: "Végétalien",
            color: "green"
        }, {
            name: "Facile à préparer",
            color: "green"
        }, {
            name: "Sans Gluten",
            color: "green"
        }, {
            name: "Faible en calories",
            color: "green"
        }, {
            name: "Riche en protéines",
            color: "green"
        }, {
            name: "Riche en fibres",
            color: "green"
        }, {
            name: "Riche en calcium",
            color: "green"
        }, {
            name: "Riche en fer",
            color: "green"
        }, {
            name: "Riche en antioxydants",
            color: "green"
        }, {
            name: "Riche en vitamines",
            color: "green"
        }, {
            name: "Sans lactose",
            color: "green"
        }, {
            name: "Épicé",
            color: "orange"
        }, {
            name: "Doux",
            color: "orange"
        }, {
            name: "Sucré",
            color: "orange"
        }, {
            name: "Salé",
            color: "orange"
        }, {
            name: "Sucré-Salé",
            color: "orange"
        }, {
            name: "Traditionnel",
            color: "yellow"
        }, {
            name: "Recette de famille",
            color: "yellow"
        }, {
            name: "Recette de fête",
            color: "yellow"
        }, {
            name: "Classique",
            color: "yellow"
        }, {
            name: "Pour les sportifs",
            color: "yellow"
        }, {
            name: "Économique",
            color: "yellow"
        }, {
            name: "Fromage",
            color: "blue"
        }, {
            name: "Poisson",
            color: "blue"
        }, {
            name: "Viande",
            color: "blue"
        }, {
            name: "Légumes",
            color: "blue"
        }, {
            name: "Pâtes",
            color: "blue"
        }, {
            name: "Française",
            color: "black"
        }, {
            name: "Italienne",
            color: "black"
        }, {
            name: "Mexicaine",
            color: "black"
        }, {
            name: "Chinoise",
            color: "black"
        }, {
            name: "Indienne",
            color: "black"
        }, {
            name: "Japonaise",
            color: "black"
        }, {
            name: "Grecque",
            color: "black"
        }, {
            name: "Espagnole",
            color: "black"
        }, {
            name: "Thaïlandaise",
            color: "black"
        }, {
            name: "Marocaine",
            color: "black"
        }, {
            name: "Libanaise",
            color: "black"
        }, {
            name: "Brésilienne",
            color: "black"
        }, {
            name: "Américaine",
            color: "black"
        }, {
            name: "Allemande",
            color: "black"
        }, {
            name: "Russe",
            color: "black"
        }, {
            name: "Coréenne",
            color: "black"
        }, {
            name: "Vietnamienne",
            color: "black"
        }, {
            name: "Turque",
            color: "black"
        }, {
            name: "Britannique",
            color: "black"
        }, {
            name: "Australienne",
            color: "black"
        }, {
            name: "Caribéenne",
            color: "black"
        }, {
            name: "Péruvienne",
            color: "black"
        }, {
            name: "Argentine",
            color: "black"
        }, {
            name: "Égyptienne",
            color: "black"
        }, {
            name: "Sud-africaine",
            color: "black"
        }
    ]

    const { selectedTags, setSelectedTags } = props

    const handleSelection = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag))
        } else if (selectedTags.length > 2) {
            // Envoyer une <Notification /> qui indique qu'il ne peut y avoir 
            // plus de 3 tags dans la sélection de l'utilisateur
        } else {
            setSelectedTags([...selectedTags, tag])
        }
    }
    

    return (
        <div className="tags">
            <h3>Sélectionner jusqu'à 3 tags</h3>
            {tags.map((tag) => 
                <TagElement key={tag.name} tag={tag} handleSelection={() => handleSelection(tag.name)} 
                isSelected={selectedTags.includes(tag.name) ? true : false} />
            )}
        </div>
    )
}

export default Tags