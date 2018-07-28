import React, { Component } from 'react'
import './subTitle.styl'

export default class SubTitle extends Component {
  render () {
    return (
      <div className="sub-title">
        <div className="title">{this.props.title}</div>
        {this.props.children}
      </div>
    )
  }
}
