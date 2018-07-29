import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import main from '@/pages/main/main'

export default class RouteConfig extends Component {
  render () {
    return (
      <BrowserRouter>
        <Route path='/' component={main}></Route>
      </BrowserRouter>
    )
  }
}
