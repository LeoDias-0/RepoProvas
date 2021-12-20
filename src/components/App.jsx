import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom'
import ResetCSS from './utils/ResetCSS'
import SelectStyle from './utils/SelectStyle'
import InitialScreen from './pages/InitialScreen'
import SearchByProfessor from './pages/SearchByProfessor'
import SearchByScreen from './pages/SearchByScreen'
import SendScreen from './pages/SendScreen'
import ExamsByProfessorScreen from './pages/ExamsByProfessorScreen'

const App = () => {
	return (
		<BrowserRouter>
			<ResetCSS />
			<SelectStyle />
			<Routes>
				<Route path='/' element={<InitialScreen />} />
				<Route path='/search' element={<SearchByScreen />} />
				<Route path='/search/professor' element={<SearchByProfessor />} />
				<Route path='/search/professor/:id' element={<ExamsByProfessorScreen />} />
				<Route path='/search/discipline' element={<h1>Work in progress</h1>} />
				<Route path='/send' element={<SendScreen />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App