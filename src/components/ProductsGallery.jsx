import { Component } from 'react'
import ProductCard from './ProductCard'
import ProductsContext from '../context/ProductsContext'

class ProductsGallery extends Component {
	static contextType = ProductsContext
	render() {
		let products = []
		console.log(this.context.data);
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
export default ProductsGallery
