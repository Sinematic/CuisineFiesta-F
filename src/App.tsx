import { Routes, Route } from "react-router-dom"
import AccessControl from './components/AccessControl/AccessControl'
import Home from "./components/Home/Home"
import Profile from "./components/Profile/Profile"
import Premium from "./components/Premium/Premium"
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy"

function App() {

	return (
		<>
			<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/premium" element={<Premium />} />
					<Route path="/confidentialite" element={<PrivacyPolicy />} />
				<Route path="/login" element={<AccessControl />} />
			</Routes>
		</>
	)
}

export default App