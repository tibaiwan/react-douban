import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import main from '@/pages/main/main'

export default class RouteConfig extends Component {
  render () {
    return (
      <HashRouter>
        <Route path='/' component={main}></Route>
      </HashRouter>
    )
  }
}
