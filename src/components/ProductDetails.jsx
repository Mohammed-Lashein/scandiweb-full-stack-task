import React, { Component } from 'react'
import ColorDetails from './ColorDetails'
import OptionsDetails from './OptionDetails'
import BooleanChoiceDetails from './BooleanChoiceDetails'
class ProductDetails extends Component {
	constructor(props) {
		super(props)
		this.state = { size: null, color: null }
	}

	render() {
		const product = this.props.product
		let colors
		let capacityOrSize
		let radioChoices
		// let colors, capacityOrSize, radioChoices = []
		// console.log(colors);
		// console.log(capacityOrSize);
		/* The colors and capacityOrSize have the value undefined, after 
		asking chat I found that what I did above was just initialing the 
		variables without giving them value . Only radioChoices will get the
		value . To give each variable the same value, I have to assign the 
		values to them separately .
		
		Or I can write : 
		let colors = capacitySize = radioChoices = []
		*/

		if (product) {
			product.attributes.map((attribute) => {
				switch (attribute.name) {
					case 'Color':
						colors = attribute.items
						break
					case 'Capacity':
					case 'Size':
						capacityOrSize = [attribute.items, attribute.name]
						/* Make this an obj and pass to it both the items and the 
						label so that we can use it in the OptionDetails component */
						break;
					default:
						radioChoices = [attribute.items, attribute.name]
						break;
				}
			})
		}

		return (
			<div className='product-details-container__product-description-container'>
				<header>{product.name}</header>
				<div className='product-details-container__product-description-container__product-size'>
					<OptionsDetails productOptions={capacityOrSize} />
					<ColorDetails colors={colors} />
					<BooleanChoiceDetails options={radioChoices}/>
				</div>
				<div className='product-details-container__product-description-container__product-price'>
					<p className='product-details-label'>Price</p>
					<p className='product-price'>{product.prices[0].currency.symbol} {product.prices[0].amount}</p>
				</div>
				<button>Add to cart</button>
				<div className='product-details-container__product-description-container__product-description'>
					{product.description}
				</div>
			</div>
		)
	}
}

export default ProductDetails
