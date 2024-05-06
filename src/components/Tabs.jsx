import React from 'react'
import ProductsContext from '../context/ProductsContext'
import { Link } from 'react-router-dom'
class Tabs extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		let categories = []
		if (this.context) {
			categories = this.context.data?.categories
		}
		return (
			<ul className='tabs'>
				{categories?.map((category, i) => (
					<Link
						to='/'
						key={category.name}
					>
						<li
							className={this.props.activeTabIndex === i ? 'active' : ''}
							onClick={() => this.props.handleActiveTab(i)}
						>
							{category.name}
						</li>
					</Link>
				))}
			</ul>
		)
	}
}
Tabs.contextType = ProductsContext

export default Tabs
