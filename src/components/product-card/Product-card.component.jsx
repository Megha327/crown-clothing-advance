import { useContext } from 'react';
import Button, { BUTTON_TYPE_CLASSESS } from '../button/Button.component';
import './product-card.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSESS.inverted} onClick = {addProductToCart}>Add To Cart</Button>
        </div>
    )
}

export default ProductCard;