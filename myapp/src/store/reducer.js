// 本来是从redux调用的combineReducers方法，返回的是js对象，这里让他从redux-immutable中导入方法，让state变成immutable对象
import { combineReducers } from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'


// 这里的对象是映射的state,是一个js对象
export default combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer
})