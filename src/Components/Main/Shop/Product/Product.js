import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({ product, addToCart }) => {
    const { img, name, price, ratings, seller, id } = product;
    return (
        <div className='product'>
            <img className='p-img' src={img} alt="" />
            {/* <p className='p-name'>{name.slice(0, 20)}</p> */}
            <p className='p-name'>{name.length > 20 ? name.slice(0, 20) + "..." : name}</p>
            <p className='p-price'>Price: ${price}</p>
            <p className='p-manufacturer'>Manufacturer: {seller}</p>
            <p className='p-rating'>Rating: {ratings} stars</p>
            <button onClick={() => addToCart(product)} className='btn-cart'>
                Add To Cart &nbsp;<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;