import React from 'react'
import Tabs from './Tabs'
import cartLogoUrl from '../assets/cart.svg'
import companyLogoUrl from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import CartModal from './CartModal'

class Navbar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {isCartModalOpen: false}
	}
	setIsCartModalOpen = () => {
		this.setState((prevState) => ({isCartModalOpen: !prevState.isCartModalOpen}))
		console.log(this.state.isCartModalOpen);
	}
	render() {
		// console.log(cartLogoUrl)
		return (
			<>
						<nav className='navbar'>
				<Tabs
					activeTabIndex={this.props.activeTabIndex}
					handleActiveTab={this.props.handleActiveTab}
				/>
				{/* I questioned myself about the benefit of this component and wanted to remove it, but I realized something very important . 
      
      This component will re-render often, so it is better to isolate the code in it in a component as putting this code here will make all the children in the Navbar component re-render unnecessarily . So it is best to have Tabs component */}
				<div className='logo'>
					<Link to='/'>
						<img
							src={companyLogoUrl}
							alt='logo'
						/>
					</Link>
				</div>
				<div onClick={this.setIsCartModalOpen} className='navbar__cart-icon'>
					<img
						src={cartLogoUrl}
						alt='cart'
					/>
				</div>
			</nav>
			{this.state.isCartModalOpen && <CartModal setIsCartModalOpen={this.setIsCartModalOpen}/>}
			</>
		)
	}
}
export default Navbar
/* 
  Something important I learned that it was a must to document : 

  <img src="../assets/logo.png" alt="logo" />

  Importing images like this won't work . The suggested way in the docs is to import asset as a url . Then vite would write the correct url to use the img starting from the root dir .
  
  We could also access the image manually without importing imgUrl, just make sure that you write the img path as an absolute path
import NavigationAndSelectedCategory from './NavigationAndSelectedCategory';
import CartModal from './CartModal';

  Link to the article in vite docs : https://vitejs.dev/guide/assets





*/
