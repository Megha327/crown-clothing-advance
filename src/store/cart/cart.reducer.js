import { CART_TYPE_ACTION } from "./cart.types";

export const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [], 
}


export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch(type){
        
        case CART_TYPE_ACTION.SET_CART_ITEMS:
            return{
                ...state,
                cartItems: payload,
            }
        case CART_TYPE_ACTION.SET_IS_CART_OPEN:
            return{
                ...state,
                isCartOpen: payload
            }
            
        default:
            return state;
    }
}