import { connect } from 'react-redux'
import { fbVote, logInFB, pageView } from '../actions/index'
import App from '../App'

const mapStateToProps = (state, ownProps) => {
  return {
    activeVote: state.vote,
    activePage: state.pageView
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChoseNum: (number) => {
      dispatch(fbVote(number));
    },
    onPageView: (myPage) =>{
      dispatch(pageView(myPage));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
