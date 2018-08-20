export default (state = {}, action) => {
	switch (action.type) {
		case 'SIMPLE_ACTION':
			return {
				result: `Hello ${action.payload}`
			}
		default:
			return state
	}
}
