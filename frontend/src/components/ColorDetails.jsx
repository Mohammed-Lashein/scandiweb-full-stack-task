import React, { Component } from 'react'
class ColorDetails extends Component {
	constructor(props) {
		super(props)
		this.state = { color: null }
	}
	setSelectedColor = (selectedColor) => {
		this.setState({ color: selectedColor })
	}
	render() {
		return (
			<>
				{this.props.colors && (
					<div className='product-details-container__product-description-container__product-color'>
						<p className='product-details-label'>color</p>
						<ul>
							{this.props.colors.map((color) => {
								console.log(color);
								return (
									<li
										key={color.displayValue}
										style={{ backgroundColor: color.value }}
										onClick={() => this.setSelectedColor(color)}
										className={`${this.state.color === color ? 'active' : ''}`}
									></li>
								)
							})}
						</ul>
					</div>
				)}
			</>
		)

		{
			/* <div className='product-details-container__product-description-container__product-color'>
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
				*/
		}
	}
}

export default ColorDetails
