import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    title: '',
    content: ''
})

export default (state = defaultState, action) => {
    // immutable对象的set方法，会结合之前的immutabl对象的值和设置的值返回一个新的对象
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: fromJS(action.title),
                content: fromJS(action.content)
            })
        default:
            return state
    }
}