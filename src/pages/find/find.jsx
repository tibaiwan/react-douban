import React, { Component } from 'react'
import Search from '@/components/search/search'
import TabItems from '@/components/tab/tab'
import Card from '@/components/card/card'
import SubTitle from '@/components/subTitle/subTitle'
import HotMovies from './hotMovies/hotMovies'
import './find.styl'

class Hot extends Component {
  state = {
    activeTab: 0,
    tabItems: ['电影', '电视']
  }

  tabChange = () => {
  }

  render () {
    return (
      <div>
        <div className="search-wrap">
          <Search/>
        </div>
        <TabItems activeTab={this.state.activeTab} tabItems={this.state.tabItems} tabChange={this.tabChange}/>
        <div className="card-wrap">
          <Card title="找电影" comments="豆瓣高分/大陆/青春" withRightBorder>
            <div className="iconfont icon-fenlei"></div>
          </Card>
          <Card title="我的影视" comments="未登录">
            <div className="iconfont icon-icon4"></div>
          </Card>
        </div>
        <SubTitle title="豆瓣热门">
          <div className="total">全部 99+ ></div>
        </SubTitle>
        <HotMovies/>
        {/* <SubTitle title="豆瓣 Top250"/> */}
        <div className="bottom-image">
          <img src={require('@/assets/images/douban/doupin.jpg')} alt=""/>
        </div>
      </div>
    )
  }
}

export default Hot
