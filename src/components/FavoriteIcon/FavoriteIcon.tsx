import { useEffect, useState } from "react";
import { FavList } from "../../interfaces/FavList";
import "../../styles/FavoriteIcon/FavoriteIcon.css";

function FavoriteIcon(props: { title: string, url: string, image: string, mealType: string }) {

	const { title, url, image, mealType } = props

	const isRecipeFavorite = localStorage.getItem("favorites") ?
		JSON.parse(localStorage.getItem("favorites")!)
		.some((favorite: { title: string, url: string, image: string, mealType: string }) => favorite.title === title) : false

	const [isFavorite, setIsFavorite] = useState<boolean>(isRecipeFavorite);

	const handleFavorites = (e: React.MouseEvent) => {
		e.stopPropagation()
		setIsFavorite(!isFavorite)
	};

	useEffect(() => {
		const favList: FavList[] = localStorage.getItem("favorites") !== null ?
		JSON.parse(localStorage.getItem("favorites")!) : []

		const isAlreadyInList = favList.some(favorite => favorite.title === title)

		if (isFavorite && !isAlreadyInList) {
			const updatedFavList: FavList[] = [...favList, { title: title, url: url, image: image, mealType: mealType }]
			localStorage.setItem("favorites", JSON.stringify(updatedFavList))

		} else if (!isFavorite && isAlreadyInList) {
			const updatedFavList: FavList[] = favList.filter(favorite => favorite.title !== title);
			localStorage.setItem("favorites", JSON.stringify(updatedFavList))
		}
	}, [isFavorite, title, url])

	return (
		<div className={isFavorite ? "favorite-wrapper" : "favorite-wrapper not"} onClick={(e) => handleFavorites(e)}>
			<svg className={isFavorite ? "favorite" : "is-not-favorite"} onClick={(e) => handleFavorites(e)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={isFavorite ? "#c30404" : "#FFFFFF"}>
				<g strokeWidth="0"></g>
				<g strokeLinecap="round" strokeLinejoin="round" stroke={isFavorite ? "#c30404CCCCCC" : "#FFFFFF"} strokeWidth="2"></g>
				<g> 
					<path fill={isFavorite ? "#c30404" : "#"} d="M12 5.881C12.981 4.729 14.484 4 16.05 4C18.822 4 21 6.178 21 8.95C21 12.3492 17.945 15.1195 13.3164 19.3167L13.305 19.327L12 20.515L10.695 19.336L10.6595 19.3037C6.04437 15.1098 3 12.3433 3 8.95C3 6.178 5.178 4 7.95 4C9.516 4 11.019 4.729 12 5.881Z"></path>
				</g>
			</svg>			
		</div>
	)
}

export default FavoriteIcon
