import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHotMovies } from '@/store/find/action'
import Rating from '@/components/rating/rating'
import './hotMovies.styl'

class HotMovies extends Component {

  componentDidMount () {
    this.props.getHotMovies()
  }

  render () {
    return (
      <section className="hot-box">
        <div className="movies-board">
          <div className="movies-board-inner">
          {
            this.props.findData.hotMoviesList && this.props.findData.hotMoviesList.map((movie, index) => {
              return (
                <div className={`movie ${(index + 1)%8===0 ? 'no-margin-right' : ''}`} key={index}>
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

export default connect(state => ({findData: state.findData}), {getHotMovies})(HotMovies)
