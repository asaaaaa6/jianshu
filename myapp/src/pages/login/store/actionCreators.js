import axios from 'axios'
import * as constants from './constants'

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})
const changeLogout = () => ({
    type: constants.CHANGE_LOGOUT,
    value: false
})


export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password)
            .then(res => {
                const result = res.data.data
                if (result) {
                    // 我们这一步用来分发action来修改数据
                    dispatch(changeLogin())
                } else {
                    alert('登录失败')
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(changeLogout())
    }
}