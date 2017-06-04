import { connect } from 'react-redux'
import { vote } from '../actions/index'
import Home from '../components/home'

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
)(Home)
