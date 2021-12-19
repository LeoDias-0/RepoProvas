import SelectSearch, { fuzzySearch } from 'react-select-search'
import 'react-select-search/style.css'


const SearchDropDown = ({ options, placeholder, emptyMessage, track }) => {
	const [value, setValue] = track

	return (
		<SelectSearch
			options={options}
			search
			filterOptions={fuzzySearch}
			emptyMessage={emptyMessage}
			placeholder={placeholder}
			value={value}
			onChange={v => setValue(v)}
		/>

	)
}

export default SearchDropDown