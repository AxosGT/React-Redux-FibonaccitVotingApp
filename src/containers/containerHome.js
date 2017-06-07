import { connect } from 'react-redux'
import { vote, logInFB } from '../actions/index'
import {fb, logInFBGoogle} from '../myFireBase';
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
        fb.auth().onAuthStateChanged(function(user) {
        if (user) {
          dispatch(logInFB(fb.auth().currentUser.email));
        } else {
          logInFBGoogle();
        }
      });
    },
    onChangeUser: ()=>{
        logInFBGoogle();
        fb.auth().onAuthStateChanged(function(user) {
        if (user) {
          dispatch(logInFB(fb.auth().currentUser.email));
        } else {
          dispatch(logInFB("User auth failed"));
        }
      });
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
