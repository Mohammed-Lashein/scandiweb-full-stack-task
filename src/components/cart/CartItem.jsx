import React, { Component } from 'react'
import { CartContext } from '../../context/CartContext'
class CartItem extends Component {
  static contextType = CartContext
	state = {}
	render() {
    let {increaseItemQty, decreaseItemQty} = CartContext
		return (
			<div className='cart-container__product-container'>
				<div className='cart-container__product-container__product-info-container'>
					<p>{this.props.name}</p>
					<div className='cart-container__product-container__product-info-container__product-price'>${this.props.price}</div>
				</div>

				<div className='cart-container__product-container__qty-container'>
					<button className='increment-qty' onClick={() => increaseItemQty(this.props.id)}>+</button>
					<p>1</p>
					<button className='decrement-qty' onClick={() => decreaseItemQty(this.props.id)}>
					-
					</button>
				</div>

				<div>
					<img
						src={this.props.img}
						alt=''
						className='cart-container__product-container__product-info-container__product-img'
					/>
				</div>
			</div>
		)
	}
}

export default CartItem
