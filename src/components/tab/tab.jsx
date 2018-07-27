import React, { Component } from 'react'
import './tab.styl'

export default class Tab extends Component {

  // 切换tab选项
  tabClicked = index => {
    this.props.tabChange(index)
  }

  render () {
    return (
      <div className="tab-items">
        {
          this.props.tabItems.map((item, index) => {
            return <div className={`item ${this.props.activeTab === index ? 'active' : '' }`} key={index} onClick={this.tabClicked.bind(this, index)}>{item}</div>
          })
        }
      </div>
    )
  }
}
