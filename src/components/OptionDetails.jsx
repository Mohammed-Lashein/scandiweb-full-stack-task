import React, { Component } from 'react'
class OptionsDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {option: null}
	}

	setSelectedSize = (selectedOption) => {
		this.setState({ option: selectedOption })
		console.log(this.state);
	}

	render() {
		return (
			<>
			{
				this.props.productOptions && 				<div className='product-details-container__product-description-container__product-size'>
					<>
						<p className='product-details-label'>{this.props.productOptions[1]}</p>
						{/* The 2nd el in productOptions will be the label of 
						the attributes */}
						<ul>
					{this.props.productOptions[0].map((option) => (
						<li
							key={option.id}
							onClick={() => this.setSelectedSize(option.value)}
							className={`${this.state.option === option.value ? "active" : ""}`}
						>
							{option.displayValue}
						</li>
					))}
				</ul>

					</>
			</div>

			}
			</>
		)
	}
}

export default OptionsDetails
