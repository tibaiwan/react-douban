import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovieDetail, getMovieDetailMobie } from '@/store/common/action'
import Rating from '@/components/rating/rating'
import MovieDetail from '../movieDetail/movieDetail'
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
    console.log('showMovieDetail id: ', id)
    this.props.getMovieDetail(id)
    this.props.getMovieDetailMobie(id)
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
                    <div className="btn-buy">购票</div>
                  </div> :
                  <div className="right want">
                    <div className="collect-count">{movie.collect_count > 10000 ? `${movie.collect_count % 1000 / 10}万` : movie.collect_count}人想看</div>
                    <div className="btn-buy">想看</div>
                  </div>
                }
                
              </div>
            )
          })
        }
        {
          this.props.commonData.movieDetail && this.props.commonData.movieDetail.id ? <MovieDetail/> : document.title = '豆瓣电影'
        }
      </section>
    )
  }
}

export default connect(state => ({commonData: state.commonData}), {getMovieDetail, getMovieDetailMobie})(MovieList)
