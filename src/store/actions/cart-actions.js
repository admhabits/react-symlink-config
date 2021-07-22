import {ADD_TO_CART, REMOVE_CART, ADD_QUANTITY, SUB_QUANTITY} from '../actions/action-types';

export function AddToCart(data, id){
	const action = {
		type: ADD_TO_CART,
		payload: {
			id: id,
			data: data
		}
	}
	return action
}

export function RemoveCart(id){
	const action = {
		type: REMOVE_CART,
		id
	}

	return action
}

export function AddQuantity(id){
	const action = {
		type: ADD_QUANTITY,
		id
	}
	return action
}

export function SubQuantity(id){
	const action = {
		type: SUB_QUANTITY,
		id
	}
	return action
}