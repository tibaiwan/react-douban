import * as common from './action-type'
import API from '@/api/jsonp'
import mock from '@/api/mock_movie_detail'

export const getMovieDetail = id => {
  console.log('getMovieDetail id:', id)
  return async dispatch => {
    // let result = await API.get(`/v2/movie/subject/${id}`)
    dispatch({
      type: common.GET_MOVIE_DETAIL,
      movieDetail: mock
    })
  }
}
