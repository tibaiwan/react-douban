import * as common from './action-type'
import API from '@/api/jsonp'
import mock from '@/api/mock_movie_detail'

// 获取电影详情
export const getMovieDetail = id => {
  console.log('getMovieDetail id:', id)
  return async dispatch => {
    let result = await API.get(`/v2/movie/subject/${id}`)
    dispatch({
      type: common.GET_MOVIE_DETAIL,
      movieDetail: result
    })
  }
}

// 获取电影详情 移动端API
export const getMovieDetailMobie = id => {
  console.log('getMovieDetailMobie id:', id)
  return async dispatch => {
    let result = await API.getMobile(`/rexxar/api/v2/elessar/subject/${id}`)
    dispatch({
      type: common.GET_MOVIE_DETAIL_MOBILE,
      movieDetailMobile: result
    })
  }
}

// 清除电影详情
export const clearMovieDetail = () => {
  return dispatch => {
    dispatch({
      type: common.CLEAR_MOVIE_DETAIL
    })
  }
}
