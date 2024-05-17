import React, { Component } from 'react'
import ProductInCart from './ProductInCart'
import Cart from './Cart'
class CartModal extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div
				className='cart-modal-container'
				onClick={() => this.props.setIsCartModalOpen()}
			>
				<Cart />
			</div>
		)
	}
}

export default CartModal
