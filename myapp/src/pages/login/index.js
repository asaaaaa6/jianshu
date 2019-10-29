import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, Input, LoginBox, Button } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'


class Login extends PureComponent {
  render() {
    const { handleLogin, login } = this.props
    if (!login) {
      return (
        <div>
          <LoginWrapper>
            <LoginBox>
              <Input placeholder='账号' ref={(input) => { this.account = input }}></Input>
              <Input placeholder='密码' type="password" ref={(input) => { this.password = input }}></Input>
              <Button onClick={() => { handleLogin(this.account, this.password) }}>登录</Button>
            </LoginBox>
          </LoginWrapper>
        </div>
      )
    } else {
      return <Redirect to='/' />
    }
  }
  componentDidMount() {


  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch) => ({
  handleLogin(accountElem, passwordElem) {
    // 利用redux-thunk中间件,可以在action中返回一个函数
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  }
})

export default connect(mapState, mapDispatch)(Login)