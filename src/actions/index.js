export const VOTE ='VOTE'

export function vote(intVote) {
  return { type: VOTE, intVote}
}
