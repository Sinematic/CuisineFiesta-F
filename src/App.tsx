import { Routes, Route } from "react-router-dom"
import AccessControl from './components/AccessControl/AccessControl'
import Home from "./components/Home/Home"
import Profile from "./components/Profile/Profile"
import Premium from "./components/Premium/Premium"
import Quiz from "./components/Quiz/Quiz"
import PrivacyPolicy from "./assets/files/privacy-policy.json"
import RecipeBuilder from "./components/RecipeBuilder/RecipeBuilder"
import DocumentReader from "./components/DocumentReader/DocumentReader"
import Recipe from "./components/Recipe/Recipe"
import Search from "./components/Search/Search"

function App() {

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/recette/:id" element={<Recipe />} />
				<Route path="/ajouter-une-recette" element={<RecipeBuilder />} />
				<Route path="/recherche" element={<Search />} />
				<Route path="/profil" element={<Profile />} />
				<Route path="/premium" element={<Premium />} />
				<Route path="/quiz" element={<Quiz />} />
				<Route path="/confidentialite" element={<DocumentReader document={PrivacyPolicy} />} />
				<Route path="/login" element={<AccessControl />} />
			</Routes>
		</>
	)
}

export default App