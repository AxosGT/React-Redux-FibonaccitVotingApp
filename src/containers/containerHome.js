import { connect } from 'react-redux'
import { vote, logInFB ,pageLoad,changeUser} from '../actions/index'
import Home from '../components/home'

const mapStateToProps = (state, ownProps) => {
  return {
    activeVote: state.vote,
    activeUser: state.logInFB.email
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChoseNum: (number) => {
      dispatch(vote(number));
    },
    onPageLode: ()=>{
      dispatch(pageLoad());
    },
    onChangeUser: ()=>{
      dispatch(changeUser());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
