import styled from 'styled-components'

const ContainerButton = styled.button`
    height: 46px;
    background-color: #A328D6;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    width: 100%;
	max-width: 325px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border-width: 0;
    margin-top: calc(13px/2);
    text-decoration: none;
`

const Button = ({ onClick, text }) => {
	return (
		<ContainerButton onClick={onClick}>
			{text}
		</ContainerButton>
	)
}

export default Button