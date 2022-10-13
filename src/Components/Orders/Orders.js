import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Main/Shop/Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const { products, previousCart } = useLoaderData();
    const [cart, serCart] = useState(previousCart)
    return (
        <main>
            <section className='order-items'>
                {
                    cart.map(product =><ReviewItem
                    key={product.id}
                    product={product}
                    ></ReviewItem>)
                }
            </section>
            <section className='order-summery'>
                <Cart cart={cart}></Cart>
            </section>
        </main>
    );
};

export default Orders;