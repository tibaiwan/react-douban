import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getHotMovies } from '@/store/find/action'
import Rating from '@/components/rating/rating'
import './hotMovies.styl'

class HotMovies extends Component {

  componentDidMount () {
    this.props.getHotMovies()
  }

  // 展示电影详情
  showMovieDetail = id => {
    this.props.history.push(`/movie-detail/${id}`)
  }

  render () {
    return (
      <section className="hot-box">
        <div className="movies-board">
          <div className="movies-board-inner">
          {
            this.props.findData.hotMoviesList && this.props.findData.hotMoviesList.map((movie, index) => {
              return (
                <div className={`movie ${(index + 1)%8===0 ? 'no-margin-right' : ''}`} key={index} onClick={this.showMovieDetail.bind(this, movie.id)}>
                  <div className="bg-movie" style={{backgroundImage: `url(${movie.images.small})`}}></div>
                  <div className="title">{movie.title}</div>
                  <Rating rating={movie.rating} hideAverage></Rating>
                </div>
              )
            })
          }
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(connect(state => ({findData: state.findData}), {getHotMovies})(HotMovies))
