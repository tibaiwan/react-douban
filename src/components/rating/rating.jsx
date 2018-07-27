import React, { Component } from 'react'
import './rating.styl'

/*
* props.rating: {max: 10, average: 7.1, stars: "35", min: 0}}
*/
export default class Rating extends Component {
  render () {
    return (
      <div className="rating">
        {
          this.props.rating.stars === '00' ? <span>暂无评分</span> : <span>{this.props.rating.average}</span>
        }
      </div>
    )
  }
}
