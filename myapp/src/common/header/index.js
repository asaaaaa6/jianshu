import React,{PureComponent} from 'react'
import {HeaderWrapper,
  Logo,Nav,NavItem,
  NavSearch,Addition,Button
,SearchWrapper,SearchInfo
,SearchInfoTitle,SearchInfoSwitch,
SearchInfoItem,SearchInfoList} from './style'
import {Link} from 'react-router-dom'

import {CSSTransition} from 'react-transition-group'

// 每个要和store建立连接的组件都要使用connect进行连接
import {connect} from 'react-redux'

// 导入action函数
import {actionCreators} from './store'

class Header extends PureComponent{

  getListArea = () =>{
    const {focused,list,page,totalPage,handleMouseEnter,handleMouseLeave,mouseIn,handleChangePage} = this.props
    // 转成js数组
    const newList = list.toJS()
    const pageList = []

    if(newList){
      for(let i =(page * 10);i<(page+1) * 10;i++){
        pageList.push(
          <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if(focused || mouseIn){
      return(
        <SearchInfo 
        onMouseEnter={()=>{handleMouseEnter()}}
        onMouseLeave={()=>{handleMouseLeave()}}>
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch onClick={()=>{handleChangePage(page,totalPage,this.spinIcon)}}>
              <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe636;</i>
              换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              {pageList}
            </SearchInfoList>
          </SearchInfo>
      )
    }else{
      return null
    }
  }

  render() {
    const {focused,handleFocus,handleBlur,list} = this.props
    return (
      
        <HeaderWrapper>
          <Link to='/'>
          <Logo />
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            {/* 搜索框 */}
            <SearchWrapper>
              <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide">
                <NavSearch
                className={focused?'focused':''}
                onFocus={()=>{handleFocus(list)}}
                onBlur={()=>{handleBlur()}}></NavSearch>
              </CSSTransition>
              <i className={focused?'focused iconfont zoom':'iconfont zoom'}>&#xe614;</i>
              {/* 下拉换一批 */}
              {this.getListArea()}
            </SearchWrapper>
          </Nav>
          
          <Addition>
            <Button className="reg">注册</Button>
            <Button className="writting">
            <i className="iconfont">&#x615;</i>
              写文章</Button>
          </Addition>
        </HeaderWrapper> 
    )
  }
}



// 映射数据，以及修改方法
const mapStateToProps = (state)=>{
  return {
    
    // state.header(header就是reducer中的纯函数,那么这里的映射值是一个对象{focused:false})
    focused: state.getIn(['header','focused']),
    list:state.getIn(['header','list']),
    page:state.getIn(['header','page']),
    mouseIn:state.getIn(['header','mouseIn']),
    totalPage:state.getIn(['header','totalPage']),
    // state.get('header').get('focused')
    // state是js对象，state.header是immutable对象
    // 我们让state也变成immutable对象，这样前后对象都是immutable，有利用项目结构，那么就要用get方法来调用属性header,而不是state.header。。。
  }
}

const mapDispathToProps = (dispatch)=>{
  return {
    handleFocus(list){
      // 分发action执行异步请求
      (list.size===0) && dispatch(actionCreators.getList())
      console.log(list);
      
      dispatch(actionCreators.searchFocus())
    },
    handleBlur(){
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    // 换页码的分发
    handleChangePage(page,totalPage,spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
      if(originAngle){
        originAngle = parseInt(originAngle,10)
      }else{
        originAngle = 0
      }

      spin.style.transform = `rotate(${originAngle+360}deg)`
      if(page < totalPage-1){
        dispatch(actionCreators.changePage(page+1))
      }else{
        dispatch(actionCreators.changePage(0))
      }
      
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(Header)