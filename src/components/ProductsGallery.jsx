import { Component } from 'react'
import ProductCard from './ProductCard'
import ProductsContext from '../context/ProductsContext'

class ProductsGallery extends Component {
	render() {
		let products = []
		if (this.context.data) {
			products = this.context.data.products
		}

		return (
			<div className='products-container'>
				{products.map((product) => (
					<ProductCard
						product={product}
						key={product.id}
					/>
				))}
			</div>
		)
	}
}
ProductsGallery.contextType = ProductsContext
export default ProductsGallery
