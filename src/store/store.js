import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as hot from './hot/reducer'
import * as find from './find/reducer'
import * as common from './common/reducer'
import thunk from 'redux-thunk'

let store = createStore(
  combineReducers({...hot, ...find, ...common}),
  applyMiddleware(thunk)
)

export default store
