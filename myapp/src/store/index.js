import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

// redux-thunk中间件为我们提供了可以让action返回一个函数，而不仅仅是一个对象，在函数中进行异步请求发送
const store = createStore(reducer,applyMiddleware(thunk))

export default store