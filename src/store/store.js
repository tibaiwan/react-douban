import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as hot from './hot/reducer'
import thunk from 'redux-thunk'

let store = createStore(
  combineReducers({...hot}),
  applyMiddleware(thunk)
)

export default store
