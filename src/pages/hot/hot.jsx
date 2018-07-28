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
    this.handleSlide()
  }

  // 切换tab页
  tabChange = index => {
    this.setState({
      activeTab: index
    })
    let clientWidth = window.innerWidth
    const showing = document.getElementById('showing')
    const willShow = document.getElementById('will-show')
    if (index === 0) {
      showing.style.left = 0 + 'px'
      willShow.style.left = clientWidth + 'px'
    } else {
      showing.style.left = `-${clientWidth}px`
      willShow.style.left = '0px'
    }
  }

  // 监听滑动左右事件
  handleSlide = () => {
    let clientWidth = window.innerWidth
    let startPageX = 0, endPageX = 0
    const movieListWrap = document.getElementById('movie-list-wrap')
    const showing = document.getElementById('showing')
    const willShow = document.getElementById('will-show')
    // 监听开始
    movieListWrap.addEventListener('touchstart', e => {
      console.log('touchstart', e.targetTouches[0].pageX)
      startPageX = e.targetTouches[0].pageX
    })
    // 监听进行中
    movieListWrap.addEventListener('touchmove', e => {
      let currentPosition = e.targetTouches[0].pageX
      let movingDistance = currentPosition - startPageX
      console.log('movingDistance', movingDistance)
      if (Math.abs(movingDistance) > 20) {
        if (this.state.activeTab === 0 && movingDistance < 0) {
          // 向右滑动
          showing.style.left = `${movingDistance}px`
          willShow.style.left = `${clientWidth + movingDistance}px`
        } else if (this.state.activeTab === 1 && movingDistance > 0) {
          // 向左滑动
          showing.style.left = `-${clientWidth - movingDistance}px`
          willShow.style.left = `${movingDistance}px`
        }
      }
    })
    // 监听结束
    movieListWrap.addEventListener('touchend', e => {
      endPageX = e.changedTouches[0].pageX
      console.log('touchend', endPageX)
      if (endPageX - startPageX > 60) {
        console.log('slide left')
        this.setState({
          activeTab: 0
        })
        showing.style.left = 0 + 'px'
        willShow.style.left = clientWidth + 'px'
      } else if (startPageX - endPageX > 60) {
        console.log('slide right')
        this.setState({
          activeTab: 1
        })
        showing.style.left = `-${clientWidth}px`
        willShow.style.left = '0px'
      } else {
        this.tabChange(this.state.activeTab)
      }
    })
  }

  render () {
    return (
      <div>
        <TabItems activeTab={this.state.activeTab} tabItems={this.state.tabItems} tabChange={this.tabChange}></TabItems>
        <div id="movie-list-wrap">
          <ShowingMovie list={this.props.hotData.showingList} active={this.state.activeTab === 0}/>
          <WillShowMovie list={this.props.hotData.willShowList} active={this.state.activeTab === 1}/>
        </div>
      </div>
    )
  }
}

export default connect(state => ({hotData: state.hotData}), {getShowingList, getWillShowList})(Hot)
