export const LOGINFB = 'LOGINFB'
export const VOTE ='VOTE'

export function logInFB(actUser) {
  return {type: LOGINFB, actUser}
}

export function vote(intVote) {
  return { type: VOTE, intVote}
}
