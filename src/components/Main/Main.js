import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Main.css';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [detail, setDetails]= useState([]);
    const [random, setRandom] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const showDetails = (product) => {
        const newCart = [...detail, product];
        if(newCart.length > 4){
         alert('You cannot add more than 4 items')
         return;
        }
        setDetails(newCart)

    }

    const removeDetails = ()=>{
        setDetails([]);
    }
    const randomItem = (product)=>{
        const randomCart = [...detail, product];
        setRandom(randomCart[Math.round(Math.random() * 3)].name)
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
               <div className="selected-cart">
                    <h2>selected items</h2>
                    {
                        detail.map(data => <h4>{data.name}</h4>)
                    }
                    <div>
                        <button onClick={() => randomItem(products)} className='btn-one'>CHOOSE 1 FOR ME</button>
                        <button onClick={removeDetails} className='btn-two'>CHOOSE AGAIN</button>
                    </div>
                    <h4 className='random'>Random: {random}</h4>
               </div>
            </div>
        </div>
    );
};

export default Main;