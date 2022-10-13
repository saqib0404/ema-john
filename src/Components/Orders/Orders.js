import React, { useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Main/Shop/Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const { previousCart } = useLoaderData();
    const [cart, setCart] = useState(previousCart);
    const handleCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCartBtn = () => {
        setCart([]);
        deleteShoppingCart();
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
                {
                    cart.length === 0 && <h2 style={{height:"50vh", display:"flex", alignItems:"center" }}>No items for review. Please <NavLink className={'oranged'} to='/'>Shop now</NavLink></h2>
                }
            </section>
            <section className='order-summery'>
                <Cart
                    cart={cart}
                    clearCartBtn={clearCartBtn}
                ></Cart>
            </section>
        </main>
    );
};

export default Orders;