import React, { Component } from 'react'
import './rating.styl'

/*
* props.rating: {max: 10, average: 7.1, stars: "35", min: 0}}
*/
export default class Rating extends Component {
  stars = this.props.rating.stars || 0
  activeStars = Math.floor(parseInt(this.stars, 10) / 10);
  defaultStars = 5 - this.activeStars

  render () {
    return (
      <div className="rating-box">
        {
          this.props.rating.stars === '00' ? '暂无评分' :
          <div className="stars">
            {
              new Array(this.activeStars).fill(0).map((item, index) => <i key={index} className="iconfont icon-star active"></i>)
            }
            {
              new Array(this.defaultStars).fill(0).map((item, index) => <i key={index} className="iconfont icon-star"></i>)
            }
          </div>
        }
      </div>
    )
  }
}
