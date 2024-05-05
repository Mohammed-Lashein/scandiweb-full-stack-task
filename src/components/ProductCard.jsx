import React from 'react'

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='product-card'>
      <div className='product-card__img-container'>
      <img src={this.props.productImg} alt="" className='product-card__img-container__img'/>
      {/* cart icon that will take the user to product detailed page */}
      {/* <div className='product-card__img-container__cart-icon'>
        <img src="/src/assets/cart-icon--white.svg" alt="" />
      </div> */}
      </div>
      <div className='product-card__details'>
        <p className='product-card__details__product-description'>
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className='product-card__details__product-price'>
        $50.00
        </p>
      </div>
    </div>
  }
}
export default ProductCard