import React, { Component } from 'react'

class CarouselContainer extends Component {
	render() {
		return (
			<section className='product-details-container__carousel-outer-container__imgs-container'>
				{this.props.gallery.map((image, i) => (
					<div
						key={i}
						className={`product-details-container__carousel-outer-container__imgs-container__image ${
							this.props.currentImageIdx === i ? 'active' : ''
						}`}
            onClick={() => this.props.setSpecificImage(i)}
					>
						<img
							src={image}
							alt=''
						/>
					</div>
				))}
			</section>
		)
	}
}

export default CarouselContainer
