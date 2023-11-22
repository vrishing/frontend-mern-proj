import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import Pizza from '../components/Pizza';
import { deleteFromCart } from '../actions/cartActions';
import Checkout from '../components/Checkout';
import './cart.css';

export default function CartScreen() {
    const cartstate = useSelector((state) => state.cartReducer);
    const cartItems = cartstate.cartItems;
    const dispatch = useDispatch();
    const [showSuccess, setShowSuccess] = useState(false); // State to manage success message visibility

    var subtotal = cartItems.reduce((x, item) => x + item.price, 0);

    const handleCheckout = () => {
        // Additional logic for handling checkout
        // Assuming successful checkout, toggle success message visibility
        setShowSuccess(true);
        // Add more logic as needed for the checkout process
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8'>
                    <h2 className='title'>My Cart</h2>
                    {cartItems.map(item => (
                        <div className='col-lg-12 box' key={item._id}>
                            <div className='text-left m-1 w-100'>
                                <h1 className='cart'>{item.name} [{item.varient}]</h1>
                                <h1 className='cart'>Price: {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                                <h1 style={{ display: 'inline' }} className='cart'>Quantity:
                                    <span className='plus' onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}>+</span>
                                    <b>{item.quantity}</b>
                                    <span className='minus' onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }}>-</span>
                                </h1>
                            </div>

                            <div className='image m-1 w-100'>
                                <img src={item.image} style={{ height: '80px', width: '80px' }} alt={item.name} />
                            </div>

                            <div className='m-1 w-100 mt-4'>
                                <span className='minus' onClick={() => { dispatch(deleteFromCart(item)) }}>REMOVE</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='col-lg-4 text-right'>
                    <h3 style={{ fontSize: '45px' }}>Sub Total: Rs. {subtotal}</h3>
                    <div onClick={handleCheckout}><Checkout subtotal={subtotal} /></div>
                </div>
            </div>

            {/* Success message */}
            {showSuccess && (
                <div className='alert alert-success'>
                    Order placed successfully!
                </div>
            )}
        </div>
    );
}
