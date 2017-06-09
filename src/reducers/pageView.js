import {PAGEVIEW} from '../actions/index'

function pageView(state =  'home', action){
  switch (action.type) {
    case PAGEVIEW:
      return action.pageV;
    default:
      return state
  }
}

export default pageView
