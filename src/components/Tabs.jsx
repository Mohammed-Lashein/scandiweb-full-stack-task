import React from 'react'
import { categories } from '../data/constants'
class Tabs extends React.Component {
	constructor(props) {
		super(props)
		// this.state = { activeTabIndex: 0 }
	}
	// handleActiveTab = (activeTabIdx) => {
	// 	// this.setState({activeTabIndex: activeTabIdx})
	// }
	render() {
		return (
			<ul className='tabs'>
				{categories.map((categoryName, i) => (
					<li
						className={this.props.activeTabIndex === i ? 'active' : ''}
						key={categoryName}
            onClick={() => this.props.handleActiveTab(i)}
					>
						{categoryName}
					</li>
				))}
			</ul>
		)
	}
}

export default Tabs
