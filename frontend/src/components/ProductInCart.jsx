import React, { Component } from 'react'
import CartProductInfo from './CartProductInfo'
import CartProductQuantity from './CartProductQuantity'
import TotalPrice from './TotalPrice'
class ProductInCart extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className='cart-container__product-container'>
				<CartProductInfo />
				<CartProductQuantity />
				<img
					src='https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087'
					alt=''
					className='cart-container__product-container__product-info-container__product-img'
				/>
			</div>
		)
	}
}

export default ProductInCart
