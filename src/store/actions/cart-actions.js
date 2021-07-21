import {ADD_TO_CART, REMOVE_CART, ADD_QUANTITY, SUB_QUANTITY} from './action-types';

export function AddToCart(id){
	const action = {
		type: ADD_TO_CART,
		id
	}
}

export function RemoveCart(id){
	const action = {
		type: REMOVE_CART,
		id
	}
}

export function AddQuantity(id){
	const action = {
		type: ADD_QUANTITY,
		id
	}
}

export function SubQuantity(id){
	const action = {
		type: SUB_QUANTITY,
		id
	}
}