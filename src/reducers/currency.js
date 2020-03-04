export const currencyFrom = (state = {id: "USD",name: "United State Dollar"},action) => {
	switch(action.type) {
		case 'CHANGE_FROM':
			return action.currency
		default: return state;
	}
}

export const currencyTo = (state = {id: "CAD",name: "Canadian Dollar"},action) => {
	switch(action.type) {
		case 'CHANGE_TO':
			return action.currency
		default: return state;
	}
}