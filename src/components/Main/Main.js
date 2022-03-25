import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Main.css';

const Main = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='main-area'>
            <div className="card-container">
                <div className="cart-style">
                    {
                        products.map(product => <Cart key={product.id} product={product}></Cart>)
                    }
                </div>

            </div>
            <div className="cart-details">
                <p>details</p>
            </div>
        </div>
    );
};

export default Main;