import {Routes, Route} from "react-router-dom"
import AccessControl from './components/AccessControl/AccessControl'
import Home from "./components/Home/Home"

function App() {

	return (
		<>
			<Routes>
					<Route path="/" element={<Home />} />
				<Route path="/login" element={<AccessControl />} />
			</Routes>
		</>
	)
}

export default App
