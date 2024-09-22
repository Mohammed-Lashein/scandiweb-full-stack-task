import React, { Component } from 'react'
import Cart from './Cart'
class CartModal extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div
				className='cart-modal-container'
				// onClick={() => this.props.setIsCartModalOpen()}
				/* 
				Since that setIsCartOpen is an arrow function itself, we can
				pass it to the onClick event directly without the need of
				wrapping it in another function
				 */
				onClick={this.props.setIsCartModalOpen}
			>
				<Cart />
			</div>
		)
	}
}

export default CartModal
