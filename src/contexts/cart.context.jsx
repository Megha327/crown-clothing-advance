import { createContext, useEffect, useState } from "react";

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

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems]=  useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() =>{
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() =>{
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

   
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart, clearItemFromCart, cartTotal}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}