import { createGlobalStyle } from 'styled-components'


const SelectStyle = createGlobalStyle`
	.select-search {
		width: calc(100% - 50px);
		max-width: 500px;
		box-sizing: border-box;
		border-width: 0;
		margin: calc(13px/2) 0;
	}

	.select-search__value {
		width: 100%;
	}

	.select-search__input {
		padding-left: 15px;
		height: 58px;
		background-color: #FFFFFF;
    	border-radius: 5px;
		font-family: 'Raleway';
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		color: #000000;
		border-width: 0;
	}

	:focus {
		outline: none;
	}

	& ::placeholder {
		font-family: 'Raleway';
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		color: #afafaf;
	}
	
	//.select-search__select {}

	.select-search__options {
		max-height: 4.7cm;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	
	::-webkit-scrollbar {
		display: none;
	}

	//.select-search__row {}

	//.select-search__option {}
	

`

export default SelectStyle