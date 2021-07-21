import {ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, CLEAR_CART } from '../actions/cart-actions.js';
import uniqSetWithForEach from 'array-uniq';

export function CartReducers(state = [], action){
	switch (action.type) {
	  case ADD_ITEM:
	  	// console.log(action.index)
	  	const data = action.payload.data;
	  	state.push(data);
	  	localStorage.setItem('cart', JSON.stringify(state));
	  	
	  	return state;
	    break;

	  case UPDATE_ITEM:
	    state[state.indexOf(action.payload.id)] = action.payload.data;
	    return state;
	    break;

	  case REMOVE_ITEM:
	    state.splice(state.indexOf(action.payload.id), 1);
	    return state;
	    break;

	  case CLEAR_CART:
	    state = action.data;
	    return state;
	    break;
	    
	  default:
	    return state;
	    break;
	}
}