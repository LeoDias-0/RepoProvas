import ResetCSS from './utils/ResetCSS'
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom'

const App = () => {
	return (
		<BrowserRouter>
			<ResetCSS />
			<Routes>
				<Route path='/' element={<h1>Work in progress</h1>} />
			</Routes>
		</BrowserRouter>
	)
}

export default App