import React, { Component } from 'react'
import './search.styl'

class Search extends Component {
  render () {
    return (
      <div className="search-box">
        <div className="seach-btn">
          <i className="iconfont icon-searchicon"></i>
          <span>电影 / 电视剧 / 影人</span>
        </div>
      </div>
    )
  }
}

export default Search
