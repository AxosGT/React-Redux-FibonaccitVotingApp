import {VOTE} from '../actions/index'

function vote(state = 0, action){
  switch (action.type) {
    case VOTE:
      console.log(action);
      return action.myVote
    default:
      return state
  }
}

export default vote
