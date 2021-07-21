export const ADD_ITEM = "ADD_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_CART = "CLEAR_CART";


export function AddItem(idx,data){
	const action = {
		type: ADD_ITEM,
		index: idx,
		payload: {
			data: data
		}
	}

	return action
}

export function UpdateItem(id, data){
	const action = {
		type: UPDATE_ITEM,
		payload: {
			id: id,
			data: data
		}
	}
	return action;
}

export function RemoveItem(id){
	const action = {
		type: REMOVE_ITEM,
		payload: {
			id: id
		}
	}
	return action;
}

export function ClearCart(){
	const action = {
		type: CLEAR_CART,
		payload : {
			data : []
		}
	}
	return action;
}