import React, { Component } from 'react'
import ColorDetails from './ColorDetails'
import OptionsDetails from './OptionDetails'
import BooleanChoiceDetails from './BooleanChoiceDetails'
class ProductDetails extends Component {
	constructor(props) {
		super(props)
		this.state = { size: null, color: null }
	}

	setSelectedSize = (selectedSize) => {
		this.setState({ size: selectedSize })
		console.log(this.state)
	}

	render() {
		const product = this.props.product
		// console.log(this.props.apple);
		/* It is good that trying to access a property that is not there in
		the props doesn't throw an error but instead just returns 
		undefined. This will be extremely benefecial when work on the 
		attributes of each product .  */
		return (
			<div className='product-details-container__product-description-container'>
				<header>{product.name}</header>
				<div className='product-details-container__product-description-container__product-size'>
					{product.attributes.map(
						(attribute) => {
							switch (attribute.name) {
								case 'Capacity':
								case 'Size':
									return (
										<OptionsDetails
											key={attribute.name}
											productOptions={attribute.items}
											labelName={attribute.name}
										/>
									)
								case 'Color':
									return (
										<ColorDetails
											colors={attribute.items}
											key={attribute.name}
										/>
									)
								default:
									return <BooleanChoiceDetails key={attribute.name} />
							}
						}
						// <li
						// 	key={size}
						// 	className={size === this.state.size ? 'active' : ''}
						// 	onClick={() => this.setSelectedSize(size)}
						// >
						// 	{size}
						// </li>
					)}
				</div>
				{/* <div className='product-details-container__product-description-container__product-color'>
					<p className='product-details-label'>color</p>
					<ul>
						{colors.map((color) => (
							<li
								key={color}
								style={{ backgroundColor: color }}
								onClick={() => this.setSelectedColor(color)}
								className={`${this.state.color === color ? 'active' : ''}`}
							></li>
						))}
					</ul>
				</div>
				*/}

				{/* Note that the prices are not in the attributes, so we need 
				to handle them separately */}

				<div className='product-details-container__product-description-container__product-price'>
					<p className='product-details-label'>Price</p>
					<p className='product-price'>$50</p>
				</div>
				<button>Add to cart</button>
				<div className='product-details-container__product-description-container__product-description'>
					Great sneakers for everyday use
				</div>
			</div>
		)
	}
}

export default ProductDetails
