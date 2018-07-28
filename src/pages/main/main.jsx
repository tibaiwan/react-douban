import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Footer from '@/components/footer/footer'
import Hot from '../hot/hot'
import Find from '../find/find'
import Person from '../person/person'
import './main.styl'

class Main extends Component {
  render () {
    return (
      <main className="container">
        <section className="content">
          <Route path="/hot" component={Hot}/>
          <Route path="/find" component={Find}/>
          <Route path="/person" component={Person}/>
        </section>
        <section className="footer">
          <Footer></Footer>
        </section>
      </main>
    )
  }
}

export default Main
