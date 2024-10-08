import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import CarouselContainer from './CarouselContainer'
import ImageContainer from './ImageContainer'
import ProductDetails from './ProductDetails'
import ProductsContext from '../context/ProductsContext'

class Product extends Component {
	constructor(props) {
		super(props)
		this.state = { currentImageIdx: 0, gallery: null }
	}

	setSpecificImage = (specifiedIdx) => {
		this.setState({ currentImageIdx: specifiedIdx })
	}

	render() {
		/* I thought of providing the specific category gallery in the 
		componentDidMount method, but the problem is that on the component
		mount, the context was not available yet . And I don't understand 
		why that happened even though in the App component I didn't render
		the DOM before  fetching  the elements . 
		
		But since this is the case, and the context value is available here,
		I will extract the required gallery in the render method .*/

		let specifiedProduct = this.context?.data?.products.find((product) => product.id === this.props.productId)
		/* using the higher order function "find" here is better than filter,
		since that filter returns an array containing the element or 
		elements passing the condition, while find returns an element directly */
		// console.log(specifiedProduct);

		let handleCurrentImageIdxIncrement = () => {
			if (this.state.currentImageIdx < specifiedProduct.gallery.length - 1) {
				this.setState((prev) => ({ currentImageIdx: prev.currentImageIdx + 1 }))
			} else {
				this.setState({ currentImageIdx: 0 })
			}
		}
		let handleCurrentImageIdxDecrement = () => {
			if (this.state.currentImageIdx > 0) {
				this.setState((prev) => ({ currentImageIdx: prev.currentImageIdx - 1 }))
			} else {
				this.setState({ currentImageIdx: specifiedProduct.gallery.length - 1 })
			}
		}

		return (
			<>
				{specifiedProduct && (
					<div className='product-details-container'>
						<div className='product-details-container__carousel-outer-container'>
							<CarouselContainer
								currentImageIdx={this.state.currentImageIdx}
								handleCurrentImageIdxDecrement={handleCurrentImageIdxDecrement}
								handleCurrentImageIdxIncrement={handleCurrentImageIdxIncrement}
								setSpecificImage={this.setSpecificImage}
								gallery={specifiedProduct && specifiedProduct.gallery}
							/>
							<ImageContainer
								currentImageIdx={this.state.currentImageIdx}
								handleCurrentImageIdxDecrement={handleCurrentImageIdxDecrement}
								handleCurrentImageIdxIncrement={handleCurrentImageIdxIncrement}
								gallery={specifiedProduct && specifiedProduct.gallery}
							/>
						</div>
						<ProductDetails product={specifiedProduct}/>
					</div>
				)}
			</>
		)
	}
}
Product.contextType = ProductsContext

function ProductPage() {
	/* 
  In the requirements of the project, it is stated that I can use class 
  components only. But after searching, I couldn't find a way to deal 
  with the url params using react router without using a HOC (Higher Order Component) . 
   */
	const { productId } = useParams()
	return <Product productId={productId} />
}

export default ProductPage
