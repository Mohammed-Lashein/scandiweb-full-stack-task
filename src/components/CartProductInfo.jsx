import React, { Component } from 'react'
import OptionsDetails from './OptionDetails';
import ColorDetails from './ColorDetails';
class CartProductInfo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const sizeOptions = [
      [{
        id: "XS",
        value: "XS",
        displayValue: "XS",
      },
      {
        id: "S",
        value: "S",
        displayValue: "S",
      },
      {
        id: "M",
        value: "M",
        displayValue: "M",
      },
      {
        id: "L",
        value: "L",
        displayValue: "L",
      },
    ],
      "Size"
    ]
    const colorOptions = [
      [
        {
          value: "coral",
          displayValue: "coral"
        },
        {
          value: "orange",
          displayValue: "orange"
        },
        {
          value: "green",
          displayValue: "green"
        },
      ],
      "Color"
    ]
    return (
      <div className='cart-container__product-container__product-info-container'>
        <header>
          Running shoes
        </header>
        <p className='cart-container__product-container__product-info-container__product-price'>
          $50
        </p>
        <OptionsDetails productOptions={sizeOptions}/>
        <ColorDetails colors={colorOptions}/>
      </div>
    );
  }
}
 
export default CartProductInfo;