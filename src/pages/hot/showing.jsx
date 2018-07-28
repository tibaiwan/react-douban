import React, { Component } from 'react'
import MovieList from '@/components/movieList/movieList'

class ShowingMovie extends Component {

  render () {
    return (
      <div className="showing" id="showing">
        <MovieList {...this.props} type="showing"></MovieList>
      </div>
    )
  }
}

export default ShowingMovie
