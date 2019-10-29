import React, { PureComponent } from 'react'
import {RecommendWrapper,RecommendItem} from '../style'
import { connect } from 'react-redux'

class Recommend extends PureComponent{
    render() {
      const {list} = this.props
      return (
        <RecommendWrapper>
         {list.map((l)=>
            <RecommendItem imgUrl={l.get('imgUrl')} key={l.get('id')}/>
         )}
        </RecommendWrapper>
      )
    }
}

const mapState = (state)=>({
  list:state.getIn(['home','recommendList'])
})

export default connect(mapState,null)(Recommend)