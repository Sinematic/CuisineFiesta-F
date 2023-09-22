import "../../styles/RecipeBuilder/TagElement.css";

function TagElement(props: {
	tag: { name: string, color: string },
	isSelected: boolean,
	handleSelection: (name: string) => void
}) {
    return (
		<span onClick={() => props.handleSelection(props.tag.name)}
			className={"tag-element " + props.tag.color + (props.isSelected ? " selected" : "")}>
			{props.tag.name}
		</span>
    );
}

export default TagElement;
