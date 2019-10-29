// fackbook提供了一个immutable库
import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 0,
    totalPage: 1
})

export default (state = defaultState, action) => {
    // immutable对象的set方法，会结合之前的immutabl对象的值和设置的值返回一个新的对象
    switch (action.type) {
        case (constants.SEARCH_FOCUS):
            return state.set('focused', true)
        case (constants.SEARCH_BLUR):
            return state.set('focused', false)
        case (constants.CHANGE_LIST):
            return state.set('list', action.data).set('totalPage', action.totalPage)
        case (constants.MOUSE_ENTER):
            return state.set('mouseIn', true)
        case (constants.MOUSE_LEAVE):
            return state.set('mouseIn', false)
        case (constants.CHANGE_PAGE):
            return state.set('page', action.page)
        default:
            return state;
    }
}