import { connect } from 'react-redux'
import { fbVote ,vote ,pageView} from '../actions/index'
import RePage from '../components/rePage'

const mapStateToProps = (state, ownProps) => {
  return {
    activeVote: state.vote
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChoseNum: (number) => {
      dispatch(fbVote(number));
    },
    onChangePage: (pageName)=>{
      dispatch(pageView(pageName))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RePage)
