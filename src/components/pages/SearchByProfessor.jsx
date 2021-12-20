import Background from '../utils/Background'
import Select from 'react-select'
import { useState, useEffect } from 'react'
import LogoRepoProvas from '../utils/LogoRepoProvas'
import Button from '../utils/Button'
import NoShapeButton from '../utils/NoShapeButton'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { professors } from '../../globals'
import { getExams } from '../../services/API'


const customStyles = {
	option: styles => ({
		...styles,
		fontFamily: 'Raleway',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '18px',
		color: 'black'
	}),

	container: styles => ({
		...styles,
		width: 'calc(100% - 50px)',
		maxWidth: '500px'
	}),

	menu: styles => ({
		...styles,
		maxHeight: 'calc(50vh - 55px)',
		overflowY: 'scroll'
	}),

	control: styles => ({
		...styles,
		height: '58px',
		fontFamily: 'Raleway',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '20px',
		color: '#000000'
	}),


	placeholder: styles => ({
		...styles,
		fontFamily: 'Raleway',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '20px',
		color: '#afafaf'
	})
}

const RowStyles = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between'
}

const SearchByProfessor = () => {
	const navigate = useNavigate()

	const [option, setOption] = useState('')

	const [profsQty, setProfsQty] = useState('')

	useEffect(() => {
		getExams().then((res) => {

			const exams = res.data

			setProfsQty(professors.map(row => {
				const qty = exams.filter(a => a.professor === row.name).length
				return {
					...row,
					qty,
					id: encodeURI(row.name)
				}
			}))
		})
	}, [])

	return (
		<Background>
			<LogoRepoProvas />
			<Select
				value={option}
				onChange={e => setOption(e)}
				placeholder={'Professor'}
				isClearable
				isSearchable
				name="color"
				options={profsQty === '' ? [] : profsQty}
				getOptionLabel={(option) => {
					return (
						<div style={RowStyles}>
							<span>{option.name}</span>
							<span>{option.qty}</span>
						</div>
					)
				}}
				styles={customStyles}
			/>
			<Button text={'Pesquisar'} onClick={() => {
				if (!option.id) {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'Primeiro escolha um professor'
					})
					return
				}
				navigate(`/search/professor/${option.id}`)
			}} />
			<NoShapeButton text={'Voltar'} onClick={() => navigate('/search')} />
		</Background>
	)
}

export default SearchByProfessor