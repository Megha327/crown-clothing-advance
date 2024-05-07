import { useContext } from 'react';
import Button from '../button/Button.component';
// import './cart-dropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/Cart-item.component';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';


const CartDropdown  = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = () => {
        navigate('/checkout');
    }
    return(
        <CartDropdownContainer>
            <CartItems>
                {
                   cartItems.length > 0 ? cartItems?.map(item => <CartItem key = {item.id} cartItem={item} />)
                   : (<EmptyMessage>Your cart is Empty</EmptyMessage>)
                }
            </CartItems>
            <Button onClick = {goToCheckOutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;