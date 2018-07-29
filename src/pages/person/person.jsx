import React, { Component } from 'react'
import './person.styl'

class Person extends Component {
  state = {
    activeTabIndex: 0,
    tabList: ['讨论', '想看', '在看', '看过', '影评', '影人']
  }

  // 切换Tab
  changeTab = index => {
    this.setState({
      activeTabIndex: index
    })
  }

  render () {
    return (
      <div className="person-wrap">
        <div className="header">
          <div className="setting">
            <i className="iconfont icon-setting"></i>
          </div>
          <div className="person-info">
            <div className="photo outer-circle">
              <div className="inner-circle">
                <i className="iconfont icon-morentouxiang"></i>
              </div>
            </div>
            <div className="info">请登录</div>
          </div>
        </div>
        <div className="tab-wrap">
          <ul>
            {
              this.state.tabList.map((item, index) => <li key={index} onClick={this.changeTab.bind(this, index)} className={`${this.state.activeTabIndex === index ? 'active' : ''}`}>{item}</li>)
            }
          </ul>
        </div>
        <div className="blank-area"></div>
        <div className="unlogin-wrap">
          <img src={require('@/assets/images/douban/sleep.png')} alt="sleep"/>
        </div>
      </div>
    )
  }
}

export default Person
