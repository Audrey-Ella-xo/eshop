import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img src="" alt="" className="checkout__ad" />
        <div>
          <h2 className="checkout__title">
            your shopping basket
          </h2>
          <CheckoutProduct />
        </div>
      </div>

      <div className="checkout__right"></div>
    </div>
  )
}

export default Checkout