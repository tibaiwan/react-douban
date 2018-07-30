import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Footer from '@/components/footer/footer'
import Hot from '../hot/hot'
import Find from '../find/find'
import Person from '../person/person'
import movieDetail from '@/pages/movieDetail/movieDetail'
import Login from '@/pages/login/login'
import './main.styl'

class Main extends Component {
  render () {
    return (
      <main className="container">
        <section className="content">
          <Switch>
            <Route path="/douban/hot" component={Hot}/>
            <Route path="/douban/find" component={Find}/>
            <Route path="/douban/person" component={Person}/>
            <Route path="/douban/login" component={Login}/>
            <Route path='/douban/movie-detail/:id' component={movieDetail}></Route>
            <Redirect to="/douban/hot"/>
          </Switch>
        </section>
        <section className="footer">
          <Footer></Footer>
        </section>
      </main>
    )
  }
}

export default Main
