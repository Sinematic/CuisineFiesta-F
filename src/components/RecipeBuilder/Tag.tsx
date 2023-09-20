import "../../styles/RecipeBuilder/Tag.css"

function Tag() {

    const tags = [
        {
            name: "Bon pour la santé",
            color: "green"
        }, {
            name: "À partager",
            color: "orange"
        }, {
            name: "Végétarien",
            color: "blue"
        }, {
            name: "Végatalien",
            color: "yellow"
        }, {
            name: "Facile à préparer",
            color: "green"
        }, {
            name: "Sans Gluten",
            color: "orange"
        }, {
            name: "Faible en calories",
            color: "blue"
        }, {
            name: "Riche en protéines",
            color: "yellow"
        }, {
            name: "Riche en fibres",
            color: "green"
        }, {
            name: "Riche en calcium",
            color: "orange"
        }, {
            name: "Riche en fer",
            color: "blue"
        }, {
            name: "Riche en antioxydants",
            color: "yellow"
        }, {
            name: "Riche en vitamines",
            color: "green"
        }, {
            name: "Sans lactose",
            color: "orange"
        }, {
            name: "Épicé",
            color: "blue"
        }, {
            name: "Doux",
            color: "yellow"
        }, {
            name: "Sucré",
            color: "green"
        }, {
            name: "Salé",
            color: "orange"
        }, {
            name: "Sucré-Salé",
            color: "blue"
        }, {
            name: "Traditionnel",
            color: "yellow"
        }, {
            name: "Recette de famille",
            color: "green"
        }, {
            name: "Recette de fête",
            color: "orange"
        }, {
            name: "Classique",
            color: "blue"
        }, {
            name: "Fromage",
            color: "yellow"
        }, {
            name: "Poisson",
            color: "green"
        }, {
            name: "Viande",
            color: "orange"
        }, {
            name: "Légumes",
            color: "blue"
        }, {
            name: "Pâtes",
            color: "yellow"
        }, {
            name: "Pour les sportifs",
            color: "green"
        }, {
            name: "Économique",
            color: "orange"
        }
    ]


    return (
        <div className="tags">
            <h3>Sélectionner 3 tags maximum</h3>
            
            {tags.map((tag) => <span className={"tag-element " + tag.color}>{tag.name}</span>)}
        </div>
    )
}

export default Tag