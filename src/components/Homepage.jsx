import React, { Component } from 'react'
import ProductsGallery from './ProductsGallery';
import ActiveTab from './ActiveTab';
class HomePage extends Component {
  constructor(props) {
    super(props)
  }
  render() { 
    return (
      <>
      <ActiveTab activeTabIndex = {this.props.activeTabIndex}/>
      <ProductsGallery activeTabIndex={this.props.activeTabIndex}/>
      </>
    );
  }
}
 
export default HomePage;