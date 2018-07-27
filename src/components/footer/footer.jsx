import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NavItem from './navItem'

class Footer extends Component {
  render () {
    return (
      <div className="nav-wrap">
        <NavLink to="/hot"><NavItem iconName="icon-dianying" iconTitle="热映"></NavItem></NavLink>
        <NavLink to="/find"><NavItem iconName="icon-yanjing" iconTitle="找片"></NavItem></NavLink>
        <NavLink to="/person"><NavItem iconName="icon-icon_pc" iconTitle="我的"></NavItem></NavLink>
      </div>
    )
  }
}

export default Footer
