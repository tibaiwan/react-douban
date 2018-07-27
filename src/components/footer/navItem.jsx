import React, { Component } from 'react'
import './navItem.styl'

class NavItem extends Component {
  render () {
    return (
      <div className="nav-item">
        <i className={`iconfont ${this.props.iconName}`}></i>
        <span>{this.props.iconTitle}</span>
      </div>
    )
  }
}

export default NavItem
