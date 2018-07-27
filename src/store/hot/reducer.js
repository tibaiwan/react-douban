import * as hot from './action-type'

let defaultState = {
  showingList: [],
  willShowList: []
}

export const hotData = (state = defaultState, action ={}) => {
  switch (action.type) {
    case hot.SHOWING_LIST:
      return {...state, showingList: action.showingList}
    case hot.WILL_SHOW_LIST:
      return {...state, willShowList: action.willShowList}
    default:
      return state
  }
}
