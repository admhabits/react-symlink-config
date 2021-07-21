
const initState = {
	cart: [],
	total: 0
}

export default function CartReducers(state = initState, action){
	switch(action.type){
		case ADD_TO_CART:
			const cart = state.cart.find(item => item.id === action.id)

			return state
		break;
	}
}