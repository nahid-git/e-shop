import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { eHandle, product, removeFromCart } = props
    const { img, name, price, shipping, seller, ratings, id } = product
    return (
        <div className='product'>
            <img src={img} alt="Missing_Image" />
            <div className='product-details'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price : ${price}</p>
                <p><small>Shipping Charge : ${shipping}</small></p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings}</small></p>
            </div>
            <div className='btn-div'>
                <button onClick={() => { eHandle(product) }}>
                    Add to Cart
                    <FontAwesomeIcon icon={faShoppingCart} className='icon' />
                </button>
                <button onClick={() => { removeFromCart(id) }}>
                    Remove Cart
                    <FontAwesomeIcon icon={faTrashCan} className='icon' />
                </button>
            </div>
        </div>
    );
};

export default Product;