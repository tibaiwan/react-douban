import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router/index'
import registerServiceWorker from './registerServiceWorker'
import '@/assets/styles/common.styl'

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('root'))
}

render(Router)

registerServiceWorker()
