import { useContext } from 'react';
import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';

// import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
 
    const cartIconHandler = () => {
        setIsCartOpen(!isCartOpen);
    }

    return(
        <CartIconContainer onClick={cartIconHandler}>
            <ShopingIcon/>
            <ItemCount>
                {cartCount}
            </ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;