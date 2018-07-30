import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Rating from '@/components/rating/rating'
import './movieList.styl'

/*
* title: String 标题
* rating: Object 评价
* genres: Array 标签
* images: Array 海报
* directors: Array 导演
* casts: Array 主演
* collect_count: Number 观看人数
*/
class MovieList extends Component {

  // 展示电影详情
  showMovieDetail = id => {
    this.props.history.push(`/douban/movie-detail/${id}`)
  }

  // 购票
  buyTicket = (id, event) => {
    event.stopPropagation()
    console.log('buyTicket id', id)
    this.gotoLogin()
  }

  // 想看
  wantWatch = (id, event) => {
    event.stopPropagation()
    console.log('wantWatch id', id)
    this.gotoLogin()
  }

  // 跳转至登录页面
  gotoLogin = () => {
    this.props.history.push('/douban/login')
  }

  render () {
    return (
      <section className="movie-list">
        {
          this.props.list.map((movie, index) => {
            return (
              <div className="movie" key={index} onClick={this.showMovieDetail.bind(this, movie.id)}>
                <div className="left">
                  <img src={movie.images.small} alt={movie.alt} className="img"/>
                </div>
                <div className="center">
                  <div className="title">{movie.title}</div>
                  <div className="rating-wrap">
                    <Rating rating={movie.rating}></Rating>
                    <span>{movie.rating.average}</span>
                  </div>
                  <div className="directors">
                    <span className="director">导演：{movie.directors[0].name}</span>
                  </div>
                  <div className="avatars">
                    主演：
                    {
                      movie.casts.map((cast, index) => <span className="cast" key={index}>{cast.name}{index < movie.casts.length - 1 ? ' / ' : ''}</span>)
                    }
                  </div>
                </div>
                {
                  this.props.type === 'showing' ?
                  <div className="right saw">
                    <div className="collect-count">{movie.collect_count > 10000 ? `${movie.collect_count % 1000 / 10}万` : movie.collect_count}人看过</div>
                    <div className="btn-buy" onClick={this.buyTicket.bind(this, movie.id)}>购票</div>
                  </div> :
                  <div className="right want">
                    <div className="collect-count">{movie.collect_count > 10000 ? `${movie.collect_count % 1000 / 10}万` : movie.collect_count}人想看</div>
                    <div className="btn-buy" onClick={this.wantWatch.bind(this, movie.id)}>想看</div>
                  </div>
                }
                
              </div>
            )
          })
        }
      </section>
    )
  }
}

export default withRouter(connect(state => ({commonData: state.commonData}))(MovieList))
