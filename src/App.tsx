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
import Gallery from "./components/Gallery/Gallery"
import NotFound from "./components/NotFound/NotFound"
import Blog from "./components/Blog/Blog"

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
				<Route path="/login" element={<AccessControl />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App