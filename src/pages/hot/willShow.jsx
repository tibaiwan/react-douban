import React, { Component } from 'react'
import MovieList from '@/components/movieList/movieList'

class willShowMovie extends Component {

  render () {
    return (
      <div className="will-show">
        <MovieList {...this.props} type="willShow"></MovieList>
      </div>
    )
  }
}

export default willShowMovie
