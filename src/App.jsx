import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ProductsContext from './context/ProductsContext'
import React, { Component } from 'react'
import ProductPage from './components/ProductPage'
import HomePage from './components/Homepage'
import Navbar from './components/Navbar'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { products: {}, activeTabIndex: 0, }
	}

	handleActiveTab = (activeTabIdx) => {
		this.setState({activeTabIndex: activeTabIdx})
	}

	componentDidMount() {
		fetch('/src/data/data.json')
			.then((response) => response.json())
			.then((data) => {
				this.setState({ products: data })
				console.log(this.state.products)
			})

			// just training on cors
		fetch('http://localhost:80/scandiweb-training-full-stack/src/backend/api/products.php')
		.then((res) => res.json()
		)
		.then((res) => console.log(res)
		)
	}

	render() {
		let productsLoaded = this.state.products
		/* The productsLoaded variable existense is important so that we
		can pass it in the context provider   */
		return (
			<div>
				{productsLoaded && (
					<ProductsContext.Provider value={this.state.products}>
						<BrowserRouter>
							<Navbar activeTabIndex={this.state.activeTabIndex} handleActiveTab={this.handleActiveTab}/>

							<Routes>
                
								<Route
									path='/'
									element={<HomePage activeTabIndex={this.state.activeTabIndex} />}
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
