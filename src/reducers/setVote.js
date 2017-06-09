import {VOTE} from '../actions/index'

function vote(state = 'home', action){
  switch (action.type) {
    case VOTE:
      return action. userVote
    default:
      return state
  }
}

export default vote
