import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom'
import ResetCSS from './utils/ResetCSS'
import SelectStyle from './utils/SelectStyle'
import InitialScreen from './pages/InitialScreen'
import SendScreen from './pages/SendScreen'

const App = () => {
	return (
		<BrowserRouter>
			<ResetCSS />
			<SelectStyle />
			<Routes>
				<Route path='/' element={<InitialScreen />} />
				<Route path='/search' element={<h1>Work in Progress</h1>} />
				<Route path='/send' element={<SendScreen />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App