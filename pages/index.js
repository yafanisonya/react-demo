import { connect } from 'umi'

@connect(({ getFirstDataHome }) => ({
  initData: getFirstDataHome.initData
}))

class FirstPage extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props
    if (dispatch) {
      dispatch({
        type: 'getFirstData/getFirstDataHome'
      })
    }
  }
  render () {
    const {
      initData
    } = this.props
    return (
      <div>{initData}</div>
    )
  }
}