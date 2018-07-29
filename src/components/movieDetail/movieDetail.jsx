import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearMovieDetail } from '@/store/common/action'
import './movieDetail.styl'

class MovieDetail extends Component {

  state = {
    showSummary: true,
  }

  // 展示简介详情
  showSummaryDetail = () => {
    this.setState({
      showSummary: false
    })
  }

  // 色值：十六进制转RGB
  colorHexToRGB = (hex) => {
    let rgbArr = []
    for (let i = 0; i < 6; i = i + 2) {
      rgbArr.push(parseInt(`0x${hex.slice(i, i + 2)}`, 16))
    }
    return `rgba(${rgbArr.join(',')}, .1)`
  }

  // 返回
  backForward = () => {
    this.props.clearMovieDetail()
  }

  // 移除前
  componentWillUnmount () {
    document.title = '豆瓣电影'
  }

  render () {
    const movie = this.props.commonData.movieDetail
    const movieMobile = this.props.commonData.movieDetailMobile
    document.title = movie.title
    return (
      <section className="movie-detail-popup">
        <div className="popup-inner" style={{backgroundColor: this.colorHexToRGB(movieMobile.header_bg_color)}}>
          <div className="header" style={{backgroundColor: `#${movieMobile.header_bg_color}`}}>
            <div onClick={this.backForward}><i className="iconfont icon-previewleft"></i></div>
            <div><i className="iconfont icon-baomihua"></i><span>电影</span></div>
            <div><i className="iconfont icon-fenxiang3"></i></div>
          </div>
          <div className="picture-wrap" style={{backgroundColor: `#${movieMobile.header_bg_color}`}}>
            <img id="movie-picture" src={movie.images.small} alt={movie.alt}/>
          </div>
          <div className="movie-info">
            <div className="left">
              <div className="title">{movie.title}</div>
              <div className="info">{movie.year}{movie.genres.map((item, index) => <span key={index}> / {item}</span>)}</div>
              <div className="info">上映时间：{movie.pubdates || '2018-02-08(中国大陆)'}</div>
              <div className="info">片长：{movie.durations || '117分钟'}</div>
            </div>
            <div className="right evalute">
              <div className="title">豆瓣评分</div>
              <div className="average">{movie.rating.average}</div>
              <div className="info">{movie.rating.comments_count || '234232人'}</div>
            </div>
          </div>
          <div className="btns">
            <div className="btn want">想看</div>
            <div className="btn saw">
              <span>看过</span>
              <div>{new Array(5).fill(0).map((item, index) => <i key={index} className="iconfont icon-star6"></i>)}</div>
            </div>
          </div>
          <div className="buy-ticket">
            <span><i className="iconfont icon-dianyingpiao"></i>选座购票</span>
            <i className="iconfont icon-previewright"></i>
          </div>
          <div className="introduce">
            <div className="title">简介</div>
            <div className="intro-content" style={{height: !this.state.showSummary ? 'auto' : '2.4rem'}}>
              {
                this.state.showSummary && `${movie.summary.substr(0, 85)}...`
              }
              {
                this.state.showSummary && <span className="show-more" onClick={this.showSummaryDetail}> 展开</span>
              }
              {
                !this.state.showSummary && `${movie.summary}`
              }
            </div>
          </div>
          <div className="casts-wrap">
            <div className="title">影人</div>
            <div className="casts">
              <div className="casts-list">
                {
                  movie.casts.map((cast, index) => {
                    return (
                      <div className="photo-wrap" key={index}>
                        <img src={cast.avatars.medium} alt={cast.alt}/>
                        <div className="info">{cast.name}</div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default connect(state => ({commonData: state.commonData}), {clearMovieDetail})(MovieDetail)
