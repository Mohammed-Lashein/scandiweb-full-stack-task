import React from 'react'
import Tabs from './Tabs';
import cartLogoUrl from '../assets/cart.svg'
import companyLogoUrl from '../assets/logo.svg'

class Navbar extends React.Component {
  render() {
    // console.log(cartLogoUrl)
    return ( <nav className='navbar'>
      <Tabs activeTabIndex={this.props.activeTabIndex} handleActiveTab={this.props.handleActiveTab}/>
      <div className='logo'>
        <img src={companyLogoUrl} alt="logo" />
      </div>
      <div>
        <img src={cartLogoUrl} alt="cart" />
      </div>
    </nav>
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

  Link to the article in vite docs : https://vitejs.dev/guide/assets





*/