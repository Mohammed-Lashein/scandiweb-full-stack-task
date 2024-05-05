import React from 'react'
import  ProductsContext  from '../context/ProductsContext';
class Tabs extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let categories = [];
		if (this.context) {
			categories = this.context.data?.categories;
		}
		return (
			<ul className='tabs'>
				{categories?.map((category, i) => (
					<li
						className={this.props.activeTabIndex === i ? 'active' : ''}
						key={category.name}
            onClick={() => this.props.handleActiveTab(i)}
					>
						{category.name}
					</li>
				))}
			</ul>
		)
	}
}
Tabs.contextType = ProductsContext

export default Tabs
