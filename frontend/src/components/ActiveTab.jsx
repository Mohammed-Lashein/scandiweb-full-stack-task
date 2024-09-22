import React from 'react'
import  ProductsContext  from '../context/ProductsContext';


class ActiveTab extends React.Component {
  render() {
    let categories = [];
		if (this.context.data) {
      /* At first, I checked against this.context, which provided a 
      runtime error and the execution stopped . The reason behind that 
      is that the context has an empty object at first , which turns 
      true in our condition, so we were trying to access properties on 
      a not yet existing object . That's what caused the error */
			categories = this.context.data.categories
      categories = categories.map((category) => category.name)
		}

    // if ({}) {console.log("hello");}

    return <div className='category-name'>
      {categories.length > 0 && categories[this.props.activeTabIndex]}
    </div>
  }
}
ActiveTab.contextType = ProductsContext


export default ActiveTab