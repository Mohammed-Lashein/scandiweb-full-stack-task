import React, { Component } from 'react'
class CartProductQuantity extends Component {
  render() { 
    return (
      <div className='cart-container__product-container__qty-container'>
        <button className="increment-qty">
          +
        </button>
        <p className='cart-container__product-container__qty-container__qty-value'>
          2
        </p>
        <button className="decrement-qty">
          -
        </button>
      </div>
    );
  }
}
 
export default CartProductQuantity;