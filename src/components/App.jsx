import ResetCSS from './utils/ResetCSS'
import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom'

const Test = () => <h1>Testando</h1>

const App = () => {
	return (
		<BrowserRouter>
			<ResetCSS />
			<Routes>
				<Route path='/' element={<Test />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App