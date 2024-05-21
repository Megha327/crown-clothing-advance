import { createActions } from "../../utils/reducer/reducers.utils";
import { CART_TYPE_ACTION } from "../cart/cart.types";


const addCartItem = (cartItems, productToAdd) => {
    //find if cart items contain productToAdd

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id );

    //if found, increment quantity

    if(existingCartItem){
        const updatedCartItem =  cartItems.map((cartItem) => {
            if(cartItem.id === productToAdd.id){
                return {...cartItem, quantity: cartItem.quantity + 1}
            }else{
                return cartItem;
            }
            // cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        })
        return updatedCartItem;
    }

    // return new array with modified cartItems/ new cart items

    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    //find if cart items contain cartItemToRemove

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id );

    //if found, increment quantity

    if(existingCartItem.quantity ===1){
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    const updatedCartItem =  cartItems.map((cartItem) => {
        if(cartItem.id === cartItemToRemove.id){
            return {...cartItem, quantity: cartItem.quantity - 1}
        }else{
            return cartItem;
        }
    })
    return updatedCartItem;
}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);



export const setIsCartOpen = (Boolean) => createActions(CART_TYPE_ACTION.SET_IS_CART_OPEN, Boolean);


 
export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems =  addCartItem(cartItems, productToAdd);
    return createActions(CART_TYPE_ACTION.SET_CART_ITEMS, newCartItems);
}


export const removeItemToCart = (cartItems, cartItemToRemove) => {
    const newCartItems =  removeCartItem(cartItems, cartItemToRemove);
    return createActions(CART_TYPE_ACTION.SET_CART_ITEMS , newCartItems);
}


export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems =  clearCartItem(cartItems, cartItemToClear);
    return createActions(CART_TYPE_ACTION.SET_CART_ITEMS , newCartItems);
}