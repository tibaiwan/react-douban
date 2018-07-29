import * as hot from './action-type'
import API from '@/api/jsonp'
// import mock from '@/api/mock'
// import mock2 from '@/api/mock2'

// 获取热映列表
export const getShowingList = () => {
  return async dispatch => {
    let result = await API.get('/v2/movie/in_theaters')
    dispatch({
      type: hot.SHOWING_LIST,
      showingList: result.subjects
    })
  }
}
// 获取即将上映列表
export const getWillShowList = () => {
  return async dispatch => {
    let result = await API.get('/v2/movie/coming_soon?count=20')
    dispatch({
      type: hot.WILL_SHOW_LIST,
      willShowList: result.subjects
    })
  }
}
