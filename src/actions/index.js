export const changeFrom = curr => {
	return {
		type: "CHANGE_FROM",
		currency: curr
	}
}

export const changeTo = curr => {
	return {
		type: "CHANGE_TO",
		currency: curr
	}
}