import { Routes, Route } from "react-router-dom"
import Authentification from './components/pages/Authentification'
import Home from "./components/pages/Home"
import Profile from "./components/pages/Profile"
import Premium from "./components/pages/Premium"
import Quiz from "./components/pages/Quiz"
import PrivacyPolicy from "./assets/files/privacy-policy.json"
import RecipeBuilder from "./components/pages/CreateRecipe"
import DocumentReader from "./components/DocumentReader/DocumentReader"
import Recipe from "./components/pages/Recipe"
import Search from "./components/pages/Search"
import Gallery from "./components/pages/Gallery"
import NotFound from "./components/pages/NotFound"
import Blog from "./components/pages/Blog"

function App() {

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/recette/:id" element={<Recipe />} />
				<Route path="/galerie" element={<Gallery />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/ajouter-une-recette" element={<RecipeBuilder />} />
				<Route path="/recherche" element={<Search />} />
				<Route path="/profil" element={<Profile />} />
				<Route path="/premium" element={<Premium />} />
				<Route path="/quiz" element={<Quiz />} />
				<Route path="/confidentialite" element={<DocumentReader document={PrivacyPolicy} />} />
				<Route path="/login" element={<Authentification />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App