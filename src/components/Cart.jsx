import React, { Component } from 'react'
import ProductInCart from './ProductInCart'
import TotalPrice from './TotalPrice'
import CartItem from './cart/CartItem'
import { formatCurrency } from '../utils'
import { CartContext } from '../context/CartContext'

class Cart extends Component {
	static contextType = CartContext
	constructor(props) {
		super(props)
		this.state = {
			cartData: JSON.parse(sessionStorage.getItem("cartItems")) || []
		}
	}
	render() {
		const {totalCartItemsPrices} = this.context
		return (
			<div className='cart-container' onClick={(e) => e.stopPropagation()}>
				{this.state.cartData.map((item) => (
					<CartItem {...item} key={item.id}/>
				))}

				<div className='cart-container__product-container__total-price-container'>
					<p>Total</p>
					<p>{formatCurrency(totalCartItemsPrices)}</p>
				</div>
			</div>
		)
	}
}

export default Cart
