import { useContext } from 'react';
import Button from '../button/Button.component';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/Cart-item.component';


const CartDropdown  = () => {
    const { cartItems } = useContext(CartContext);
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems?.map(item => <CartItem key = {item.id} cartItem={item} />)
                }
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;