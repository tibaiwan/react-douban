import * as find from './action-type'
// import API from '@/api/jsonp'
import mock from '@/api/mock'

export const getHotMovies = () => {
  return async dispatch => {
    // let result = await API.get('/v2/movie/new_movies?count=4')
    dispatch({
      type: find.HOT_MOVIES,
      hotMoviesList: mock.subjects
    })
  }
}
