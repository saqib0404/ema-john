import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
import Cart from './Cart/Cart';
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

    useEffect(() => {
        const storedCart = getShoppingCart();
        // console.log(storedCart);
        const savedCart = []
        for (const id in storedCart) {
            const addedCart = products.find(product => product.id === id)
            if (addedCart) {
                const quantity = storedCart[id];
                addedCart.quantity = quantity
                savedCart.push(addedCart)
            }
        }
        setCart(savedCart)
    }, [products])

    const addToCart = selectedProduct => {
        console.log(selectedProduct);
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart= [...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity += 1;
            newCart =[...rest, exists]
        }
        // newCart = [...cart, selectedProduct];
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    // console.log(cart);

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
                <Cart
                    cart={cart}
                ></Cart>
            </section>
        </main>
    );
};

export default Shop;