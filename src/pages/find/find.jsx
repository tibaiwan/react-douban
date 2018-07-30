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

  // 跳转至登录页面
  gotoLogin = () => {
    this.props.history.push('/douban/login')
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
          <div onClick={this.gotoLogin.bind(this)}>
            <Card title="我的影视" comments="未登录">
              <div className="iconfont icon-icon4"></div>
            </Card>
          </div>
        </div>
        <SubTitle title="豆瓣热门">
          <div className="total">全部 99+ ></div>
        </SubTitle>
        <HotMovies/>
      </div>
    )
  }
}

export default Hot
