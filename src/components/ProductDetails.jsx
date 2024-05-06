import React, { Component } from 'react'
class ProductDetails extends Component {
	constructor(props) {
		super(props)
		this.state = { size: null, color: null }
	}

	setSelectedSize = (selectedSize) => {
		this.setState({ size: selectedSize })
    console.log(this.state);
	}

	setSelectedColor = (selectedColor) => {
		this.setState({ color: selectedColor })
    console.log(this.state);
	}
	render() {
		const sizes = ['XS', 'S', 'M', 'L']
		const colors = ['coral', 'cornflowerblue', '#457a53']
		return (
			<div className='product-details-container__product-description-container'>
				<header>nike shoes</header>
				<div className='product-details-container__product-description-container__product-size'>
					<p className='product-details-label'>Size</p>
					<ul>
						{sizes.map((size) => (
							<li
								key={size}
								className={size === this.state.size ? 'active' : ''}
								onClick={() => this.setSelectedSize(size)}
							>
								{size}
							</li>
						))}
					</ul>
				</div>
				<div className='product-details-container__product-description-container__product-color'>
					<p className='product-details-label'>color</p>
					<ul>
						{colors.map((color) => (
							<li
								key={color}
								style={{ backgroundColor: color }}
                onClick={() => this.setSelectedColor(color)}
                className={`${this.state.color === color ? "active" : ""}`}
							></li>
						))}
					</ul>
				</div>
				<div className='product-details-container__product-description-container__product-price'>
					<p className='product-details-label'>Price</p>
					<p>$50</p>
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
