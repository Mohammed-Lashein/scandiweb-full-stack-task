import React, { Component } from 'react'
class BooleanChoiceDetails extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			this.props.options && (
				<div>
          <p className='product-details-label'>
            {this.props.options[1]}
          </p>
					{this.props.options[0].map((option,i) => (
						<React.Fragment key={option.name}>
							<input
								type='radio'
                name={this.props.options[1]}
                /* The name attribute is important so that we can't
                select more than one choice .
                 */
                id={`choice-${option.value}`}
                // The id attribute is what links the input to label
                value={option.value}
							/>
							<label htmlFor={`choice-${option.value}`}>{option.displayValue}</label>
              <br/>
						</React.Fragment>
					))}
				</div>
			)
		)
	}
}
export default BooleanChoiceDetails
