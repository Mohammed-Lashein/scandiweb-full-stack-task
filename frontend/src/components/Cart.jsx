import React, { Component } from 'react'
import ProductInCart from './ProductInCart'
import TotalPrice from './TotalPrice'
class Cart extends Component {
	render() {
		const cartData = [1, 2]
		/* cartData is dummy data and is used for just styling purposes */
		const totalItemsInCart = 1
		return (
			<div
				className='cart-container'
				onClick={(e) => e.stopPropagation()}
			>
				<header>
					<strong>My Bag</strong>, {totalItemsInCart > 1 ? totalItemsInCart + 'items' : totalItemsInCart + ' item'}
				</header>
				{cartData.map((_, i) => (
					<ProductInCart
						productData={cartData[i]}
						key={i}
					/>
				))}
				<button className='place-order-btn'>place order</button>
				<TotalPrice />
			</div>
		)
	}
}

export default Cart
