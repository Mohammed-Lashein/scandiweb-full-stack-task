import React, { Component, createContext } from 'react'
import { updateDataSource } from '../utils'
import { CartContext } from './CartContext'


class CartContextProvider extends Component {
	constructor(props) {
		super(props)

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
		const updatedItems = this.state.cartItems.map((item) => {
			if (item.id === id) {
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
		const updatedItems = this.state.cartItems.map((item) => {
			if (item.id === id) {
				return {
					...item,
					quantity: item.quantity - 1,
				}
			} else {
				return item
			}
		})

		let updatedItemsWithQtyMoreThanZero = updatedItems.filter((item) => item.quantity > 0)

		this.setState({ cartItems: updatedItemsWithQtyMoreThanZero })
		updateDataSource(updatedItemsWithQtyMoreThanZero)
	}

	render() {
    let totalCartItemsPrices = this.state.cartItems.reduce((total, product) => {
			
      return total + +product.price * product.quantity
    }, 0)
		totalCartItemsPrices = totalCartItemsPrices.toFixed(2)
		let 	totalCartItems = this.state.cartItems.reduce((qty, item) => {
			return qty + item.quantity
		}, 0)
		
		return (
			<CartContext.Provider
				value={{
					addItemToCart: this.addItemToCart,
					increaseItemQty: this.increaseItemQty,
					decreaseItemQty: this.decreaseItemQty,
					removeItemFromCart: this.removeItemFromCart,
          totalCartItemsPrices,
					totalCartItems,
					cartItems: this.state.cartItems
				}}
			>
				{this.props.children}
			</CartContext.Provider>
		)
	}
}

export default CartContextProvider
