import React, { Component } from 'react'
import {getShowingList, getWillShowList} from '@/store/hot/action'
import { connect } from 'react-redux'
import TabItems from '@/components/tab/tab'
import ShowingMovie from './showing'
import WillShowMovie from './willShow'
class Hot extends Component {
  state = {
    activeTab: 0,
    tabItems: ['正在热映', '即将上映']
  }

  componentDidMount () {
    this.props.getShowingList()
    this.props.getWillShowList()
  }

  // 切换tab页
  tabChange = index => {
    this.setState({
      activeTab: index
    })
  }

  render () {
    return (
      <div>
        <TabItems activeTab={this.state.activeTab} tabItems={this.state.tabItems} tabChange={this.tabChange}></TabItems>
        {
          this.state.activeTab === 0 ? <ShowingMovie list={this.props.hotData.showingList}/> : <WillShowMovie list={this.props.hotData.willShowList}/>
        }
      </div>
    )
  }
}

export default connect(state => ({hotData: state.hotData}), {getShowingList, getWillShowList})(Hot)
