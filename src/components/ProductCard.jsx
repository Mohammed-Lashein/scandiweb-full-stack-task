import React from 'react'
import { Link } from 'react-router-dom'


class ProductCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Link to={`/product/${this.props.product.id}`}>
      <div className='product-card'>
      <div className='product-card__img-container'>
      <img src={this.props.product.gallery[0]} alt={this.props.product.name}className='product-card__img-container__img'/>
      {/* cart icon that will take the user to product detailed page */}
      {/* <div className='product-card__img-container__cart-icon'>
        <img src="/src/assets/cart-icon--white.svg" alt="" />
      </div> */}
      </div>
      <div className='product-card__details'>
        <p className='product-card__details__product-description'>
          {this.props.product.name}
        </p>
        <p className='product-card__details__product-price'>
        
        {this.props.product.prices[0].currency.symbol}
        {this.props.product.prices[0].amount}
        {/* I have to mention that numbers are displayed in a weird way. 
        Not all of the numbers on the webpage, but some of them . 
        The reason behind that is the font named 'raleway' used in the project . 
        I looked closely into the design and found that the numbers are
        also displayed that way .   */}
        </p>
      </div>
    </div>
      </Link>
    ) 
  }
}
export default ProductCard