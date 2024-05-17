import React, { Component } from 'react'
import ProductInCart from './ProductInCart'
import TotalPrice from './TotalPrice'
class Cart extends Component {
	render() {
		const cartData = [1, 2]
		/* cartData is dummy data and is used for just styling purposes */
		return (
				<div className='cart-container' onClick={(e) => e.stopPropagation()}>
					<header>My Bag, 2 items</header>
					{cartData.map((_, i) => (
						<ProductInCart productData={cartData[i]} key={i} />
					))}
					<button className='place-order-btn'>
          place order
        </button>
					<TotalPrice />
				</div>
		)
	}
}

export default Cart
