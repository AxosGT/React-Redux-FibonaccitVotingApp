import { connect } from 'react-redux'
import { pageLoad } from '../actions/index'
import App from '../App'

const mapStateToProps = (state, ownProps) => {
  return {
    activePage: state.pageView
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPageLode: ()=>{
      dispatch(pageLoad());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
