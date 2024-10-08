import React, { Component } from 'react'
import rightArrow from "../assets/right-arrow.svg"
import leftArrow from "../assets/left-arrow.svg"

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
					disabled={this.props.gallery.length === 1}
					style={{
						cursor: this.props.gallery.length === 1 ? "default" : "pointer",
						opacity: this.props.gallery.length === 1 ? "0.3" : "1"
					}}
				>
					<img
						src={rightArrow}
						alt='right arrow'
					/>
				</button>
				<button
					className='left-arrow'
					onClick={this.props.handleCurrentImageIdxDecrement}
					disabled={this.props.gallery.length === 1}
					style={{
						cursor: this.props.gallery.length === 1 ? "default" : "pointer",
						opacity: this.props.gallery.length === 1 ? "0.3" : "1"
					}}
				>
					<img
						src={leftArrow}
						alt='left arrow'
					/>
				</button>
			</section>
		)
	}
}

export default ImageContainer
