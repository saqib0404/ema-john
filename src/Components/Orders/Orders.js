import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Main/Shop/Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const { products, previousCart } = useLoaderData();
    const [cart, setCart] = useState(previousCart);
    const handleCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <main>
            <section className='order-items'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleCart={handleCart}
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