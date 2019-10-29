import React, { PureComponent } from 'react'
import { DetailWrapper, Header, Content } from './style'
import { connect } from 'react-redux'
import { getDetail } from './store/actionCreators'

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props
    return (
      <div>
        <DetailWrapper>
          <Header>{title}</Header>
          {/* dangerouslySetInnerHTML={{__html:content}}显示成html */}
          <Content dangerouslySetInnerHTML={{ __html: content }}>

          </Content>
        </DetailWrapper>
      </div>
    )
  }
  componentDidMount() {

    this.props.getDetail(this.props.match.params.f)
  }
}

const mapState = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
})
const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(getDetail(id))
  }
})

export default connect(mapState, mapDispatch)(Detail)