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
            <Route path="/hot" component={Hot}/>
            <Route path="/find" component={Find}/>
            <Route path="/person" component={Person}/>
            <Route path="/login" component={Login}/>
            <Route path='/movie-detail/:id' component={movieDetail}></Route>
            <Redirect to="/hot"/>
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
