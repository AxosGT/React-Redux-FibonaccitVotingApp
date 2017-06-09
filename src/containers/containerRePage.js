import { connect } from 'react-redux'
import { pageView} from '../actions/index'
import RePage from '../components/rePage'

const mapStateToProps = (state, ownProps) => {
  return {
    activeVote: state.userInfo.myVote
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangePage: (pageName)=>{
      dispatch(pageView(pageName))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RePage)
