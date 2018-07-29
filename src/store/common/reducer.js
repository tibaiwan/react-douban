import * as common from './action-type'

let defaultState = {
  movieDetail: {},
  movieDetailMobile: {}
}

export const commonData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case common.GET_MOVIE_DETAIL:
      return {...state, movieDetail: action.movieDetail}
      case common.GET_MOVIE_DETAIL_MOBILE:
      return {...state, movieDetailMobile: action.movieDetailMobile}
    case common.CLEAR_MOVIE_DETAIL:
      return {...state, movieDetail: {}}
    default:
      return state
  }
}
