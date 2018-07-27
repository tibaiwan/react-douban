import React, { Component } from 'react'
import Rating from '@/components/rating/rating'
import './showing.styl'

class ShowingMovie extends Component {
  render () {
    return (
      <section className="movie-list">
        {
          this.props.list.map((movie, index) => {
            return (
              <div className="movie">
                <div className="left">
                  <img src={movie.images.small} alt={movie.alt} className="img"/>
                </div>
                <div className="center">
                  <div className="title">{movie.title}</div>
                  <Rating rating={movie.rating}></Rating>
                </div>
                <div className="right">
                  购票
                </div>
              </div>
            )
          })
        }
      </section>
    )
  }
}

export default ShowingMovie
