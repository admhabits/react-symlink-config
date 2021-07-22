import {ADD_TO_CART, REMOVE_CART, ADD_QUANTITY, SUB_QUANTITY} from '../actions/action-types';

const initState = {
	cart: [],
	total: 0,
}

export default function CartReducers(state = initState, action){
	 //INSIDE HOME COMPONENT
	    if(action.type === ADD_TO_CART){

	          //check if the action id exists in the cart
	         let cekCart = state.cart.find(item=> action.payload.id === item.id)

	         if(cekCart){
		           cekCart.quantity += 1; 
		           cekCart.subTotal = cekCart.price * cekCart.quantity;
	             return{
	                ...state,
	                 	total: state.total + cekCart.price 
	                  }
	        } else {
	            state.cart.push(action.payload.data);
	            let indexItem = state.cart.indexOf(action.payload.data);

	            state.cart[indexItem].quantity = 1;
	            state.cart[indexItem].subTotal = state.cart[indexItem].price * state.cart[indexItem].quantity;

	            let newTotal = state.total + state.cart[indexItem].price;
	            console.log();
	            return{
	                ...state,
	                total : newTotal
	            }
	            
	        }
	    }
	    if(action.type === REMOVE_CART){
	        let getItem = state.cart.find(item=> action.id === item.id)
	        let new_items = state.cart.filter(item=> action.id !== item.id)
	        
	        //calculating the total
	        let newTotal = state.total - (getItem.price * getItem.quantity )
	        
	        return{
	            ...state,
	            cart: new_items,
	            total: newTotal
	        }
	    }
	    //INSIDE CART COMPONENT
	    if(action.type=== ADD_QUANTITY){
	        let getItem = state.cart.find(item=> action.id === item.id)
	       	
	          getItem.quantity += 1;
	          getItem.subTotal = getItem.price * getItem.quantity;
	          let newTotal = state.total + getItem.price;

	          return{
	              ...state,
	              total: newTotal,
	              subTotal: getItem.subTotal
	          }
	    }
	    if(action.type=== SUB_QUANTITY){  
	    	let getItem = state.cart.find(item=> action.id === item.id)
	    		// getItem.subTotal = getItem.price * getItem.quantity;
	        //if the qt == 0 then it should be removed
	        if(getItem.quantity === 1){
	            let new_items = state.cart.filter(item=>item.id !== action.id);
	          	
	            let newTotal = state.total - getItem.price;
	    		getItem.subTotal = getItem.price * getItem.quantity;

	            return {
	                ...state,
	                cart: new_items,
	                total: newTotal,
	                subTotal: getItem.subTotal
	            }
	        }
	        else {
	            getItem.quantity -= 1
	    		getItem.subTotal = getItem.price * getItem.quantity;
	            
	            let newTotal = state.total - getItem.price
	            return{
	                ...state,
	                total: newTotal,
	                subTotal: getItem.subTotal
	            }
	        }
	        
	    }

	    // if(action.type=== ADD_SHIPPING){
	    //       return{
	    //           ...state,
	    //           total: state.total + 6
	    //       }
	    // }

	  //   if(action.type=== 'SUB_SHIPPING'){
	  //       return{
	  //           ...state,
	  //           total: state.total - 6
	  //       }
	  // }
	    
	  else{
	    return state
	    }
	    
	
}