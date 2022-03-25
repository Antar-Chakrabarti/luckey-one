import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Main.css';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [detail, setDetails]= useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const showDetails = (product) => {
        const newCart = [...detail, product];
        setDetails(newCart)
    }
    const removeDetails = ()=>{
        setDetails([]);
    }
    return (
        <div className='main-area'>
            <div className="card-container">
                <div className="cart-style">
                    {
                        products.map(product => <Cart key={product.id} product={product} showDetails={showDetails}></Cart>)
                    }
                </div>

            </div>
            <div className="cart-details">
                <h2>selected items</h2>
                {
                    detail.map(data => <h4>{data.name}</h4>)
                }
                <div>
                    <button className='btn-one'>CHOOSE 1 FOR ME</button>
                    <button onClick={removeDetails} className='btn-two'>CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};

export default Main;