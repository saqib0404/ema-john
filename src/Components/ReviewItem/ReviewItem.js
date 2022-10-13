import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ReviewItem.css'

const ReviewItem = ({ product, handleCart }) => {
    // console.log(product);
    const { id, img, name, price, quantity, shipping } = product
    return (
        <div className='review-item-container'>
            <div className="review-item-img">
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-conatiner">
                <div className="review-item-details">
                    <h3>{name}</h3>
                    <p>Price: <span className='oranged'>${price}</span></p>
                    <p>Shipping: <span className='oranged'>${shipping}</span></p>
                    <p>Quantity: <span className='oranged'>{quantity}</span></p>
                </div>
                <div className='dlt-btn-container'>
                    <button onClick={() => handleCart(id)}>
                        <FontAwesomeIcon className='dlt-btn' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;