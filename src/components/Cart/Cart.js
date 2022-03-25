import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({ product, showDetails }) => {
 const {img, name, price} = product;

    return (
        <div className='cart'>
            <img className='cart-img' src={img} alt="" />
            <h3 className='cart-details'>{name}</h3>
            <h4 className='cart-details'> price: ${price}</h4>
            <button onClick={()=>showDetails(product)} className='cart-btn'><span className='btn-txt'>Add to card</span>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cart;