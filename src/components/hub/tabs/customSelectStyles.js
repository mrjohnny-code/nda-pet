export const customSelectStyles = {
	control: (provided) => ({
		...provided,
		width: 'fit-content',
		borderRadius: '8px',
		border: 'none',
		boxShadow: 'none',
		backgroundColor: 'transparent',
		cursor: 'pointer',
		'&:hover': {
			borderColor: 'transparent',
			color: '#acdef9'
		}
	}),
	placeholder: (provided) => ({
		...provided,
		color: '#ebebeb',
		transition: 'color .2s',
		'&:hover': {
			color: '#acdef9'
		}
	}),
	singleValue: (provided) => ({
		...provided,
		color: '#ebebeb',
		transition: 'color .2s',
		'&:hover': {
			color: '#acdef9'
		}
	}),
	menu: (provided) => ({
		...provided,
		borderRadius: '8px',
		width: 'fit-content',
		backgroundColor: '#333638'
	}),
	option: (provided, state) => ({
		...provided,
		margin: '0',
		minWidth: 'max-content',
		padding: '10px 20px',
		backgroundColor: state.isSelected
			? '#65bff0'
			: state.isFocused
			? '#4c7a93'
			: '#333638',
		color: '#fff',
		cursor: 'pointer'
	}),
}