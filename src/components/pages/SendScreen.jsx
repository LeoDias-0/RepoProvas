import { useState } from 'react'
import Background from '../utils/Background'
import InfoInput from '../utils/InfoInput'
import LogoRepoProvas from '../utils/LogoRepoProvas'
import SearchDropDown from '../utils/SearchDropDown'
import Button from '../utils/Button'
import NoShapeButton from '../utils/NoShapeButton'
import { useNavigate } from 'react-router-dom'

const categories = [
	{ name: 'P1', value: 'P1' },
	{ name: 'P2', value: 'P2' },
	{ name: 'P3', value: 'P3' },
	{ name: '2ch', value: '2ch' },
	{ name: 'Outras', value: 'Outras' }
]

const disciplines = [
	{ name: 'Geometria Diferencial', value: 'Geometria Diferencial' },
	{ name: 'Topologia Algébrica', value: 'Topologia Algébrica' },
	{ name: 'Programação Linear', value: 'Programação Linear' },
	{ name: 'Dinâmica Não Autônoma', value: 'Dinâmica Não Autônoma' },
	{ name: 'Variedades Instáveis', value: 'Variedades Instáveis' }
]

const professors = [
	{ name: 'Professor X', value: 'Professor X' },
	{ name: 'Jovem Nerd', value: 'Jovem Nerd' },
	{ name: 'Isaac Newton', value: 'Isaac Newton' },
	{ name: 'Henry Poincaré', value: 'Henry Poincaré' },
	{ name: 'Marcelo Viana', value: 'Marcelo Viana' }
]

const periods = [
	{ name: 'Primeiro', value: 'Primeiro' },
	{ name: 'Segundo', value: 'Segundo' },
	{ name: 'Terceiro', value: 'Terceiro' },
	{ name: 'Quarto', value: 'Quarto' },
	{ name: 'Quinto', value: 'Quinto' },
	{ name: 'Sexto', value: 'Sexto' },
	{ name: 'Sétimo', value: 'Sétimo' },
	{ name: 'Oitavo', value: 'Oitavo' },
	{ name: 'Nono', value: 'Nono' },
	{ name: 'Décimo', value: 'Décimo' },
	{ name: 'Eletiva', value: 'Eletiva' },
]

const SendScreen = () => {
	const [name, setName] = useState('')
	const [category, setCategory] = useState('')
	const [discipline, setDiscipline] = useState('')
	const [professor, setProfessor] = useState('')
	const [period, setPeriod] = useState('')
	const [link, setLink] = useState('')

	const navigate = useNavigate()

	return (
		<Background>
			<LogoRepoProvas />
			<InfoInput placeholder={'Nome da prova'} track={[name, setName]} />
			<SearchDropDown
				options={categories}
				placeholder={'Categoria'}
				emptyMessage={'Categoria não encontrada'}
				track={[category, setCategory]}
			/>
			<SearchDropDown
				options={disciplines}
				placeholder={'Disciplina'}
				emptyMessage={'Disciplina não encontrada'}
				track={[discipline, setDiscipline]}
			/>
			<SearchDropDown
				options={professors}
				placeholder={'Professor'}
				emptyMessage={'Professor não encontrado'}
				track={[professor, setProfessor]}
			/>
			<SearchDropDown
				options={periods}
				placeholder={'Período'}
				emptyMessage={'Período não encontrado'}
				track={[period, setPeriod]}
			/>
			<InfoInput placeholder={'Link da Prova'} track={[link, setLink]} />
			<Button text={'Enviar prova'} onClick={() => console.log('Enviando Prova')} />
			<NoShapeButton text={'Voltar'} onClick={() => navigate('/')} />
		</Background>
	)
}

export default SendScreen