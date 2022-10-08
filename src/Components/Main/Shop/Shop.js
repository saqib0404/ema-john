import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    const addToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    console.log(cart);

    return (
        <main>
            <section className='products'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        addToCart={addToCart}
                    ></Product>)
                }
            </section>
            <section className='order-summery'>
                <h2>Order Summery</h2>
                <p>Selected items: {cart.length} </p>
                {/* <p>Total Price: ${cart.price}</p>
                <p>Total shipping Charge: </p>
                <p>Taxes: </p>
                <p>Grand Total: </p> */}
            </section>
        </main>
    );
};

export default Shop;