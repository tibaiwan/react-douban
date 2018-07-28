import React, { Component } from 'react'
import './card.styl'

class Card extends Component {
  render () {
    return (
      <div className="card-box">
        <div className="left">
          {this.props.children}
        </div>
        <div className="middle">
          <div className="title">{this.props.title}</div>
          <div className="comments">{this.props.comments}</div>
        </div>
        <div className={`right ${this.props.withRightBorder ? 'border-right' : ''}`}>
          <span>></span>
        </div>
      </div>
    )
  }
}

export default Card
