import styled from 'styled-components'

const ContainerInput = styled.input`
    background-color: #FFFFFF;
    border-radius: 5px;
    display: inline;
    width: calc(100% - 50px);
	max-width: 500px;
    height: 58px;
    margin: calc(13px/2) 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #000000;
    padding-left: 15px;
    box-sizing: border-box;
    border-width: 0;
    &:focus {
        outline: none;
    }
`


const InfoInput = ({ placeholder, track: [value, setValue] }) => {
	return (
		<ContainerInput
			value={value}
			onChange={e => setValue(e.target.value)}
			placeholder={placeholder}
		/>
	)
}

export default InfoInput