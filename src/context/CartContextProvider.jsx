import React, { Component, createContext } from 'react'
import { updateDataSource } from '../utils'
import { CartContext } from './CartContext'


class CartContextProvider extends Component {
	constructor(props) {
		super(props)
		console.log(props)

		this.state = {
			cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
		}
		/* 
    
    cartItem shape : 
    {
    id: '',
    name: '',
    price: ,
    quantity: 
    }
    */
	}
	addItemToCart = (itemToAdd) => {
  
		let itemInCart = this.state.cartItems.find((item) => item.id === itemToAdd.id)

		if (itemInCart) {
			const updatedItems = this.state.cartItems.map((item) => {
				if (item.id === itemToAdd.id) {
					return {
						...item,
						quantity: item.quantity + 1,
					}
				} else {
					return item
				}
			})

			this.setState({ cartItems: updatedItems })
			updateDataSource(updatedItems)
		}

		if (!itemInCart) {
			this.setState({cartItems: [...this.state.cartItems, itemToAdd]})
			updateDataSource([...this.state.cartItems, itemToAdd])
		}    
	}

	removeItemFromCart = (id) => {
		let itemsExcludingItemToRemove = this.state.cartItems.filter((item) => item.id !== id)

		this.setState({ cartItems: itemsExcludingItemToRemove })
		updateDataSource(itemsExcludingItemToRemove)
	}

	increaseItemQty = (id) => {
		const itemToUpdate = this.state.cartItems.find((item) => item.id === id)
		const updatedItems = this.state.cartItems.map((item) => {
			if (itemToUpdate.id === id) {
				return {
					...item,
					quantity: item.quantity + 1,
				}
			} else {
				return item
			}
		})

		this.setState({ cartItems: updatedItems })
		updateDataSource(updatedItems)
	}

	decreaseItemQty = (id) => {
		const itemToUpdate = this.state.cartItems.find((item) => item.id === id)
		const updatedItems = this.state.cartItems.map((item) => {
			if (itemToUpdate.id === id) {
				return {
					...item,
					quantity: item.quantity - 1,
				}
			} else {
				return item
			}
		})

		this.setState({ cartItems: updatedItems })
		updateDataSource(updatedItems)
	}

	render() {
    const totalCartItemsPrices = this.state.cartItems.reduce((total, product) => {
			
      return total + +product.price * product.quantity
    }, 0)
		console.log(totalCartItemsPrices);
		
		return (
			<CartContext.Provider
				value={{
					addItemToCart: this.addItemToCart,
					increaseItemQty: this.increaseItemQty,
					decreaseItemQty: this.decreaseItemQty,
					removeItemFromCart: this.removeItemFromCart,
          totalCartItemsPrices,
					totalCartItems: this.state.cartItems.length
				}}
			>
				{this.props.children}
			</CartContext.Provider>
		)
	}
}

export default CartContextProvider
