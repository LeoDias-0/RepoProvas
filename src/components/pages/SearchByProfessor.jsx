import Background from '../utils/Background'
import Select from 'react-select'
import { useState } from 'react'
import LogoRepoProvas from '../utils/LogoRepoProvas'
import Button from '../utils/Button'
import NoShapeButton from '../utils/NoShapeButton'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const professorsWithQty = [
	{ id: 1, name: 'Professor X', qty: 10, value: 'Professor X' },
	{ id: 2, name: 'Jovem Nerd', qty: 15, value: 'Jovem Nerd' },
	{ id: 6, name: 'Isaac Newton', qty: 11, value: 'Isaac Newton' },
	{ id: 8, name: 'Henry Poincaré', qty: 10, value: 'Henry Poincaré' },
	{ id: 81, name: 'Marcelo Viana', qty: 8, value: 'Marcelo Viana' },
	{ id: 9, name: 'Isaac Newton', qty: 11, value: 'Isaac Newton' },
	{ id: 10, name: 'Henry Poincaré', qty: 10, value: 'Henry Poincaré' },
	{ id: 4, name: 'Marcelo Viana', qty: 8, value: 'Marcelo Viana' },
	{ id: 79, name: 'Isaac Newton', qty: 11, value: 'Isaac Newton' }
]

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
				options={professorsWithQty}
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