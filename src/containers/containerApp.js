import { connect } from 'react-redux'
import { vote, logInFB } from '../actions/index'
import App from '../App'

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
)(App)
