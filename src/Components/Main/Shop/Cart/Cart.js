import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, clearCartBtn, children }) => {
    // console.log(cart);

    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity += product.quantity;
        totalPrice = (totalPrice + product.price) * quantity;
        shipping += product.shipping
    }
    const tax = +(totalPrice * 0.1).toFixed(2);
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected items: {quantity} </p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total shipping Charge: ${shipping}</p>
            <p>Taxes: ${tax}</p>
            <h3>Grand Total: ${grandTotal}</h3>
            <button onClick={clearCartBtn} className='btn-clear-cart'>Clear Cart &nbsp;
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
            {children}
        </div>
    );
};

export default Cart;