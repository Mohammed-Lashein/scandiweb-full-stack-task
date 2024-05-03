import React from 'react'
import { categories } from '../data/constants'


class ActiveTab extends React.Component {
  render() {
    return <div className='category-name'>
      {categories[this.props.activeTabIndex]}
    </div>
  }
}


export default ActiveTab