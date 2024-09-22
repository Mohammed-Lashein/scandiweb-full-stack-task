import { Component } from 'react'
import ProductCard from './ProductCard'
import ProductsContext from '../context/ProductsContext'

class ProductsGallery extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		let products = []
		let categories = ["All", "clothes", "tech"]
		if (this.context.data) {
			products = this.context.data.products
		}

		return (
			<div className='products-container'>
				{products.map((product) => {

					if (categories[this.props.activeTabIndex] === "All") {
						return <ProductCard
						product={product}
						key={product.id}
					/>
					}

					if (categories[this.props.activeTabIndex] === product.category) {
						return <ProductCard
						product={product}
						key={product.id}
						/>
					}
	})}
			</div>
		)
	}
}
ProductsGallery.contextType = ProductsContext
export default ProductsGallery
