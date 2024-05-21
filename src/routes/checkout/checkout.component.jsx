import './checkout.styles.scss';
import CheckOutItem from '../../components/checkout-item/Checkout-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

const CheckOut = () => {

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quanity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>
            </div>
            {
                cartItems.map((cartItem) => (
                    <CheckOutItem key = {cartItem.id} cartItem={cartItem} />
                ))
            }
            <div className='total'>Total: {cartTotal}</div>
        </div>
    )
}

export default CheckOut;