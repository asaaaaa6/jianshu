import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    login: false
})

export default (state = defaultState, action) => {
    // immutable对象的set方法，会结合之前的immutabl对象的值和设置的值返回一个新的对象
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value)
        case constants.CHANGE_LOGOUT:
            return state.set('login', action.value)
        default:
            return state
    }
}