import { connect } from 'react-redux'
import { fbVote ,changeUser ,pageView} from '../actions/index'
import Home from '../components/home'

const mapStateToProps = (state, ownProps) => {
  return {
    activeUser: state.logInFB.email
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChoseNum: (number) => {
      dispatch(fbVote(number));
    },
    onChangeUser: ()=>{
      dispatch(changeUser());
    },
    onChangePage: (pageName)=>{
      dispatch(pageView(pageName))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
