import React, { Component } from 'react'
import { connect } from 'react-redux'
import './movieDetail.styl'

class MovieDetail extends Component {

  render () {
    const movie = this.props.commonData.movieDetail
    return (
      <section className="movie-detail-popup">
        <div className="header">
          <div>&lt;</div>
          <div>电影</div>
          <div>分享</div>
        </div>
        <div className="picture-wrap">
          <img src={movie.images.medium} alt={movie.alt}/>
        </div>
      </section>
    )
  }
}

export default connect(state => ({commonData: state.commonData}))(MovieDetail)
