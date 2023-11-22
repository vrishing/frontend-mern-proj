import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import Success from './Success';
import Loading from './Loading';
import Error from './Error';

export default function Checkout({subtotal}) {
  const orderstate= useSelector((state)=>state.placeOrderReducer)
  const {loading,error,success}= orderstate

  const dispatch = useDispatch();
    function tokenHandler(token){
        console.log(token);
        dispatch(placeOrder(token,subtotal))

    }
    

  return (
    <div>

      {loading && (<Loading />)}
      {error && (<Error error='Something went wrong'/>)}
      {success && (<Success success='Order Placed Successfully'/>)}

        <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        token={tokenHandler}
        stripeKey='pk_test_51OD8UbSIidQaSqHZXMTvHkuk37TIwSQMO7F6lu6jx5nTEQWtQ8uZK0EXyafiqC0fGjodwICbvWMwyOfVHrijqDm700b19Df6No'
        currency='INR'
        > 
            <button className='btn'>PAY NOW</button>
        </StripeCheckout>
    </div>
  )
}
