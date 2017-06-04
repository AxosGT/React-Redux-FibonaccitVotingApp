import { connect } from 'react-redux'
import { vote } from '../actions/index'
import App from '../App'

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.vote
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