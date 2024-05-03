import React from 'react'
import Navbar from './Navbar'
import ActiveTab from './ActiveTab';

class NavigationAndSelectedCategory extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeTabIndex: 0 }
	}
	handleActiveTab = (activeTabIdx) => {
		this.setState({activeTabIndex: activeTabIdx})
	}
  render() { 
    return (
      <>
      <Navbar activeTabIndex={this.state.activeTabIndex} handleActiveTab={this.handleActiveTab}/>
      <ActiveTab activeTabIndex={this.state.activeTabIndex}/>
      </>
    );
  }
}
 
export default NavigationAndSelectedCategory;