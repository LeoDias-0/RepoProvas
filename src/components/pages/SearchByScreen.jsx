import { useNavigate } from 'react-router-dom'
import Background from '../utils/Background'
import Button from '../utils/Button'
import LogoRepoProvas from '../utils/LogoRepoProvas'


const SearchByScreen = () => {
	const navigate = useNavigate()

	return (
		<Background>
			<LogoRepoProvas />
			<Button text={'Por Professor'} onClick={() => navigate('/search/professor')} />
			<Button text={'Por Disciplina'} onClick={() => navigate('/search/discipline')} />
		</Background>
	)
}

export default SearchByScreen