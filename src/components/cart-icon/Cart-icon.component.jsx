import { useContext } from 'react';
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    console.log("cart count", cartCount);
    
    const cartIconHandler = () => {
        setIsCartOpen(!isCartOpen);
    }

    return(
        <div className='cart-icon-container' onClick={cartIconHandler}>
            <ShopingIcon className='shoping-icon'/>
            <span className='item-count'>
                {cartCount}
            </span>
        </div>
    )
}

export default CartIcon;