import React, { Component } from 'react'
class OptionsDetails extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		console.log(this.props.productOptions)
		return (
			<>
				<div className='product-details-container__product-description-container__product-size'>
					<p className='product-details-label'>{this.props.labelName}</p>
					<ul>
						{this.props.productOptions.map((option) => (
							<li key={option.id}>{option.displayValue}</li>
						))}
					</ul>
				</div>
			</>
		)
	}
}

export default OptionsDetails
