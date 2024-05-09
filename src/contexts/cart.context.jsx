import { createContext, useEffect, useReducer, useState } from "react";
import { createActions } from "../utils/reducer/reducers.utils";

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


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemToCart: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0,
})

export const CART_TYPE_ACTION={
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
}


const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type){
        
        case CART_TYPE_ACTION.SET_CART_ITEMS:
            return{
                ...state,
                ...payload,
            }
        case CART_TYPE_ACTION.SET_IS_CART_OPEN:
            return{
                ...state,
                isCartOpen: payload
            }
            
        default:
            throw new Error(`unhandled error of ${type} in cart reducer`);
    }
}


export const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0   
}

export const CartProvider = ({children}) => {
   
    const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        dispatch(createActions(CART_TYPE_ACTION.SET_CART_ITEMS, 
            {
                cartItems: newCartItems, 
                cartCount: newCartCount, 
                cartTotal: newCartTotal
            }
            
        ))
    }

   
    const addItemToCart = (productToAdd) => {
        const newCartItems =  addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems =  removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems =  clearCartItem(cartItems, cartItemToClear);
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (boolean) => {
        dispatch(createActions(CART_TYPE_ACTION.SET_IS_CART_OPEN, boolean))
    }

    const value = {
        isCartOpen, 
        setIsCartOpen,
        addItemToCart, 
        cartItems, 
        cartCount, 
        removeItemToCart, 
        clearItemFromCart, 
        cartTotal}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}