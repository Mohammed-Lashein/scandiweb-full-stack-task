import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NavigationAndSelectedCategory from './components/NavigationAndSelectedCategory'
import ProductsGallery from './components/ProductsGallery'
import ProductsContext from './context/ProductsContext'
import React, { Component } from 'react'
import ProductPage from './components/ProductPage'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { products: {} }
	}

	componentDidMount() {
		fetch('/src/data/data.json')
			.then((response) => response.json())
			.then((data) => {
				this.setState({ products: data })
				console.log(this.state.products)
			})
	}

	render() {
		let productsLoaded = this.state.products
		return (
			<div>
				{productsLoaded && (
					<ProductsContext.Provider value={this.state.products}>
						<BrowserRouter>
							<NavigationAndSelectedCategory />

							<Routes>
                
								<Route
									path='/'
									element={<ProductsGallery />}
								/>
								<Route
									path='/product/:productId'
									element={<ProductPage/>}
								/>
							</Routes>
						</BrowserRouter>
					</ProductsContext.Provider>
				)}
			</div>
		)
	}
}
export default App
