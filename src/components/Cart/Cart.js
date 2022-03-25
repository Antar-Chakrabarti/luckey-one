import React from 'react';
import './Cart.css';

const Cart = ({product}) => {
 const {img, name, price} = product;
    return (
        <div className='cart'>
            <img className='cart-img' src={img} alt="" />
            <h3 className='cart-details'>{name}</h3>
            <h4 className='cart-details'> price: ${price}</h4>
            <button className='cart-btn'>Add to card</button>
        </div>
    );
};

export default Cart;