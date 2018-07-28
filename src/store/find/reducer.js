import * as find from './action-type'

let defaultState = {
  hotMoviesList: []
}

export const findData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case find.HOT_MOVIES:
      return {...state, hotMoviesList: action.hotMoviesList}
    default:
      return {state}
  }
}
