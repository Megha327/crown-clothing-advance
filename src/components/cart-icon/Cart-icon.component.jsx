import { ReactComponent as ShopingIcon } from '../../assets/shopping-bag.svg';

// import './cart-icon.styles.scss';
import { CartIconContainer, ItemCount } from './cart-icon.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);

    const isCartOpen = useSelector(selectIsCartOpen);
 
    const cartIconHandler = () => {
        dispatch(setIsCartOpen(!isCartOpen));
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