import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
        <img className='checkoutProduct__image' src="#image" alt="#" />
        <div className="product__info">
            <p className="checkoutProduct__title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quas magnam vitae consectetur molestiae! Ipsam maiores facilis illum autem ipsa eveniet sed perspiciatis cupiditate veniam fugit? Exercitationem dolores nesciunt officia.
            </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>20</strong>
            </p>
            <div className="checkoutProduct__rating">
                ⭐⭐⭐
            </div>
            <button>Remove from basket</button>
        </div>   
    </div>
  )
}

export default CheckoutProduct