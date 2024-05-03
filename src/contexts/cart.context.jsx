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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems]=  useState([]);
    const [cartCount, setCartCount] = useState(0);

    console.log("cart count in context", cartCount)

    useEffect(() =>{
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        console.log("new cart count", newCartCount);
        setCartCount(newCartCount);
    }, [cartItems]);

   
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}