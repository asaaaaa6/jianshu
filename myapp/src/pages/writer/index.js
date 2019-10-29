import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'



class Login extends PureComponent {
  render() {
    const { login } = this.props
    if (login) {
      return (
        <div>
          写文章
          </div>
      )
    } else {
      return <Redirect to='/login' />
    }
  }

}

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Login)