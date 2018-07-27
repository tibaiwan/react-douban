import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router/index'
import store from './store/store'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import '@/utils/setRem'
import '@/assets/styles/common.styl'

const render = Component => {
  ReactDOM.render(
  <Provider store={store}>
    <Component />
  </Provider>
  , document.getElementById('root'))
}

render(Router)

registerServiceWorker()
