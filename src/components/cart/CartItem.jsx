import React, { Component } from 'react'
import { CartContext } from '../../context/CartContext'
import { formatCurrency } from '../../utils'
class CartItem extends Component {
	static contextType = CartContext
	constructor(props) {
		super(props)
	}

// 	componentDidUpdate(prevProps, prevState) {
// 		let productsFromDataSource = JSON.parse(localStorage.getItem('cartItems'))
// 		let product = productsFromDataSource.find((product) => product.id === this.state.requiredProduct.id)

// 		console.log(
// 			product
// 		);
		

// 		// if(product.quantity !== this.state.requiredProduct.quantity) {
// 		// 	this.setState({requiredProduct: {
// 		// 		...this.state.requiredProduct,
// 		// 		quantity: product.quantity
// 		// 	}})
// 		// }

// 		// below is chat solution but didn't solve the problem
// 		if (
// 			product &&
// 			product.quantity !== this.state.requiredProduct.quantity &&
// 			prevState.requiredProduct.quantity !== product.quantity
// 		) {
// 			console.log('pudding');
			
// 			this.setState({
// 				requiredProduct: {
// 					...this.state.requiredProduct,
// 					quantity: product.quantity,
// 				}
// 			}) 
// 			}
// 		// 	else {
// 		// 		this.setState({requiredProduct: {
// 		// 			...this.state.requiredProduct,
// 		// 			quantity: 0
// 		// 		}})
// 		// }

// 		// else if (
// 		// 	product &&
// 		// 	this.state.requiredProduct.quantity !== 0 &&
// 		// 	product.quantity === undefined
// 		// ) {
// 		// 	this.setState({
// 		// 		requiredProduct: {
// 		// 			...this.state.requiredProduct,
// 		// 			quantity: 0,
// 		// 		}
// 		// 	})
// 		// }

// 		// if(product == undefined) {
// 		// 	this.setState({
// 		// 				requiredProduct: {
// 		// 					...this.state.requiredProduct,
// 		// 					quantity: 0,
// 		// 				}
// 		// 			})
// 		// }
	
// }



	render() {
		let { increaseItemQty, decreaseItemQty, cartItems } = this.context
		let requiredProduct = cartItems.find((item) => item.id === this.props.id)
		return (
			<>
				{requiredProduct !== undefined ? (
					<div className='cart-container__product-container'>
						<div className='cart-container__product-container__product-info-container'>
							<p>{this.props.name}</p>
							<div className='cart-container__product-container__product-info-container__product-price'>
								{formatCurrency(this.props.price)}
							</div>
						</div>

						<div className='cart-container__product-container__qty-container'>
							<button
								className='increment-qty'
								onClick={() => increaseItemQty(requiredProduct.id)}
							>
								+
							</button>
							<p>{requiredProduct.quantity}</p>
							<button
								className='decrement-qty'
								onClick={() => decreaseItemQty(this.props.id)}
							>
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
				) : ''}
			</>
		)
	}

}


export default CartItem
