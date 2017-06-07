import { connect } from 'react-redux'
import { vote } from '../actions/index'
import RePage from '../components/rePage'

const mapStateToProps = (state, ownProps) => {
  return {
    activeVote: state.vote
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChoseNum: (number) => {
      dispatch(vote(number));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RePage)
