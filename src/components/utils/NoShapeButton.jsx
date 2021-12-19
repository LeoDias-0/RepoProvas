import styled from 'styled-components'

const ContainerButton = styled.button`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #FFFFFF;
    background-color: #8C11BE;
    outline: none;
    border-width: 0;
    margin-top: 15px;
    text-decoration: none;
`

const NoShapeButton = ({ text, onClick }) => {
	return (
		<ContainerButton onClick={onClick} >
			{text}
		</ContainerButton>
	)
}

export default NoShapeButton