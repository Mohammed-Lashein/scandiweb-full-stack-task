import React, { Component } from 'react'

class ImageContainer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let imgSource = this.props.gallery[this.props.currentImageIdx]
		return (
			<section className='product-details-container__carousel-outer-container__image-container'>
				<img
					src={imgSource}
					alt=''
				/>
				<button
					className='right-arrow'
					onClick={this.props.handleCurrentImageIdxIncrement}
				>
					<img
						src='/src/assets/right-arrow.svg'
						alt='right arrow'
					/>
				</button>
				<button
					className='left-arrow'
					onClick={this.props.handleCurrentImageIdxDecrement}
				>
					<img
						src='/src/assets/left-arrow.svg'
						alt='left arrow'
					/>
				</button>
			</section>
		)
	}
}

export default ImageContainer
