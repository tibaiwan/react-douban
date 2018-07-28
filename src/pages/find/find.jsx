import React, { Component } from 'react'
import Search from '@/components/search/search'
import TabItems from '@/components/tab/tab'
import Card from '@/components/card/card'
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
          <Search></Search>
        </div>
        <TabItems activeTab={this.state.activeTab} tabItems={this.state.tabItems} tabChange={this.tabChange}></TabItems>
        <div className="card-wrap">
          <Card title="找电影" comments="豆瓣高分/大陆/青春" withRightBorder>
            <div class="iconfont icon-fenlei"></div>
          </Card>
          <Card title="我的影视" comments="未登录">
            <div class="iconfont icon-icon4"></div>
          </Card>
        </div>

      </div>
    )
  }
}

export default Hot
