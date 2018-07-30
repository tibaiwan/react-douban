import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './login.styl'

class Login extends Component {

  backForward= () => {
    this.props.history.goBack()
  }

  render () {
    return (
      <section className="login-box">
        <div className="top">
          <i className="iconfont icon-previewleft" onClick={this.backForward.bind(this)}></i>
        </div>
        <div className="login-title">欢迎来到豆瓣</div>
        <ul className="login-form">
          <li><input type="text" placeholder="手机号/邮箱"/></li>
          <li><input type="text" placeholder="密码"/></li>
        </ul>
        <div className="btn-login">登录</div>
        <div className="btn-other">
          <div className="left">注册豆瓣</div>
          <div className="right">忘记密码</div>
        </div>
      </section>
    )
  }
}

export default withRouter(Login)
