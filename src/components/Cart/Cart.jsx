import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let totalPrice = 0
    let totalShipping = 0
    let quantityy = 0

    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1
        // }
        const{price, shipping, quantity} = product
        totalPrice += price*quantity
        totalShipping += shipping*quantity
        quantityy += quantity
    }

    const tax = totalPrice*7/100
    const grandTotal = totalPrice + totalShipping + tax

    return (
        <div className='cart-container'>
            <h2>Order Summary</h2>
            <p>Selected Item: {quantityy}</p>
            <p>Total Price: $ {totalPrice}</p>
            <p>Total Shipping Charge: $ {totalShipping}</p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;