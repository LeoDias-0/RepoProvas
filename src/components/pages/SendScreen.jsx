import { useEffect, useState } from 'react'
import Background from '../utils/Background'
import InfoInput from '../utils/InfoInput'
import LogoRepoProvas from '../utils/LogoRepoProvas'
import SearchDropDown from '../utils/SearchDropDown'
import Button from '../utils/Button'
import NoShapeButton from '../utils/NoShapeButton'
import { useNavigate } from 'react-router-dom'

import {
	categories,
	disciplines,
	professors,
	periods
} from '../../globals'
import { getQuery, sendExam } from '../../services/API'

const SendScreen = () => {
	const [name, setName] = useState('')
	const [category, setCategory] = useState('')
	const [discipline, setDiscipline] = useState('')
	const [professor, setProfessor] = useState('')
	const [period, setPeriod] = useState('')
	const [link, setLink] = useState('')

	const [filteredProfs, setFilteredProfs] = useState(professors)

	const navigate = useNavigate()

	useEffect(() => {
		if (discipline === '' || !discipline) {
			setFilteredProfs(professors)
		} else {
			getQuery('discipline', discipline).then((res) => {

				setFilteredProfs([...res.data.map(a => {
					return {
						name: a.professor,
						value: a.professor
					}
				})])

			}).catch(res => console.log({ res }))
		}
		//eslint-disable-next-line
	}, [discipline])

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
				options={filteredProfs}
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
			<Button text={'Enviar prova'} onClick={() => {
				sendExam({
					name,
					category,
					period,
					discipline,
					professor,
					link
				}).then(() => navigate('/'))
			}} />
			<NoShapeButton text={'Voltar'} onClick={() => navigate('/')} />
		</Background>
	)
}

export default SendScreen