import axios from 'axios'
import * as constants from './constants'
import {fromJS} from 'immutable'

const changeHomeData = (result)=>({
    type:constants.CHANGE_HOME_DATA,
    recommendList:result.recommendList
})
const addHomeList = (list,nextPage)=>({
    type:constants.ADD_HOME_LIST,
    list:fromJS(list),
    nextPage
})

export const getHomeInfo = ()=>{
    return (dispatch) => {
        axios.get('/api/headerList.json')
        .then(res=>{
            const result = res.data
            const action = changeHomeData(result)
            dispatch(action)
        })     
    }
}

export const getMoreList =(page)=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json?page=' + page)
        .then(res=>{
            const result = res.data.articleList
            const action = addHomeList(result,page+1)
            dispatch(action)
        })
    }
}

export const toggleTopShow = (show)=>({
    type:constants.TOGGLE_SCROLL_SHOW,
    show
})