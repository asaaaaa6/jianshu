import {fromJS} from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
   topicList:[{
       id:1,
       title:"社会热点",
       imgUrl:"//upload.jianshu.io/admin_banners/web_images/4763/c7e743e7f9a8fc19ad4c5080b782420a9cd851a2.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
   },
   {
        id:2,
        title:"机器运算",
        imgUrl:"//images.ctfassets.net/2y9b3o528xhq/5sXS0Rr3MEr66P5elfYX7P/3728cc2d85c0979cb29d5cb291369038/mentor.jpg"
    },
    {
        id:3,
        title:"健身达人",
        imgUrl:"//upload-images.jianshu.io/upload_images/6490231-20d578afb3d5337d?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
        }
    ],
    articleList:[{
        id:1,
        imgUrl:"//upload-images.jianshu.io/upload_images/15874461-3e4532c511ebbd37?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
        title:"此人当上皇帝后夜观天象，突然说：我命不久矣，没过几天真的死了",
        desc:"从这个角度讲，他才是紫禁城真正意义上的第一任主人令人意外的是，继位第二年五月，明仁宗即突然暴毙，死因成谜。自继位至暴毙，在位时间不足十个月，明仁宗之死充满谜团。"
    },
    {
        id:2,
        imgUrl:"//upload-images.jianshu.io/upload_images/16050459-2e8c51718a7a4ddd.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
        title:"“我想你了”，误发给了前任男友，却意外挽回了3年的感情",
        desc:"每个人都希望和自己爱的人，生生世世不分离，但人世间世事无常，再相爱的人也可能有分开的一天，可能是感情变了味道，不再相爱了，也可能是阴差阳错，在两个人之间产生了误会，结果错过了姻缘。"
    },{
        id:3,
        imgUrl:"//upload-images.jianshu.io/upload_images/6320501-19e376c0175ba9ce.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
        title:"可以提高表达能力的10种方法",
        desc:"上班后一直在紧张的忙碌中度过，但是办公软件因为升级新的年度账套，后台出现了各种问题，这个时候表达能力显得尤为重要，一个有效的表达沟通会尽快的解决问题，但是如何清楚有效的提高表达能力呢？"
    }],
    recommendList:[],
    articlePage:1,
    showScroll:false
})

export default (state = defaultState,action)=>{
    // immutable对象的set方法，会结合之前的immutabl对象的值和设置的值返回一个新的对象
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return state.set('recommendList',fromJS(action.recommendList))
        case constants.ADD_HOME_LIST:
            return state.merge(
                {
                    'articleList':state.get('articleList').concat(action.list),
                    'articlePage':action.nextPage
                }
                )
        case constants.TOGGLE_SCROLL_SHOW:
            return state.set('showScroll',action.show)
        default:
            return state;
    }
}