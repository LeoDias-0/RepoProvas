import { useNavigate } from 'react-router-dom'
import Background from '../utils/Background'
import Button from '../utils/Button'
import LogoRepoProvas from '../utils/LogoRepoProvas'


const InitialScreen = () => {
	const navigate = useNavigate()

	return (
		<Background>
			<LogoRepoProvas />
			<Button text={'Buscar prova'} onClick={() => navigate('/search')} />
			<Button text={'Enviar prova'} onClick={() => navigate('/send')} />
		</Background>
	)
}

export default InitialScreen