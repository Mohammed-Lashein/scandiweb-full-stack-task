import React, { Component, createContext } from 'react'
import { updateDataSource } from '../utils'
import { CartContext } from './CartContext'


class CartContextProvider extends Component {
	constructor(props) {
		super(props)
		console.log(props)

		this.state = {
			cartItems: JSON.parse(sessionStorage.getItem('cartItems')) || [],
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
			console.log('not in cart dude')
			console.log(itemToAdd)

			this.setState({cartItems: [...this.state.cartItems, itemToAdd]})
			updateDataSource([...this.state.cartItems, itemToAdd])
		}

    console.log(this.state);
    
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

	/* 
  value={{
      addItemToCart: this.addItemToCart,
      increaseItemQty: this.increaseItemQty,
      decreaseItemQty: this.decreaseItemQty,
      removeItemFromCart: this.removeItemFromCart,
    }}
  
  */

	render() {
		const vals = {
			banana: 'pudding',
			cartItems: this.state.cartItems,
		}
    const totalCartItemsPrices = this.state.cartItems.reduce((total, product) => {
			console.log(product.price);
			
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
				}}
			>
				{this.props.children}
			</CartContext.Provider>
		)
	}
}

export default CartContextProvider
