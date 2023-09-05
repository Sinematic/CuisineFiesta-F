import {Routes, Route} from "react-router-dom"
import AccessControl from './components/AccessControl/AccessControl'
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy"

function App() {

	return (
		<>
			<Routes>
				<Route path="/" element={<PrivacyPolicy />} />
				<Route path="/login" element={<AccessControl />} />
			</Routes>
		</>
	)
}

export default App
