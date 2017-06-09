import { connect } from 'react-redux'
import { fbVote, logInFB ,pageLoad,changeUser,vote,pageView} from '../actions/index'
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
      dispatch(fbVote(number));
    },
    onPageLode: ()=>{
      dispatch(pageLoad());
    },
    onChangeUser: ()=>{
      dispatch(changeUser());
    },
    onChangePage: (pageName)=>{
      dispatch(pageView(pageName))
    },
    voety: ()=>{
      dispatch(vote());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
