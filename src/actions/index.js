import {fb, logInFBGoogle} from '../myFireBase';

export const LOGINFB = 'LOGINFB'
export const VOTE ='VOTE'
export const PAGELODE = 'PAGELODE'
export const CHANGEUSER = 'CHANGEUSER'

export function logInFB(actUser) {
  return {type: LOGINFB, actUser}
}

export function vote(intVote) {
  return { type: VOTE, intVote}
}

export function pageLoad(){
  return dispatch =>{
    fb.auth().onAuthStateChanged(function(user) {
      if (user) {
        dispatch(logInFB(fb.auth().currentUser.email));
      } else {
        logInFBGoogle();
      }
    });
  };
}

export function changeUser(){
  return dispatch=>{
    logInFBGoogle();
    fb.auth().onAuthStateChanged(function(user) {
      if (user) {
        dispatch(logInFB(fb.auth().currentUser.email));
      } else {
        dispatch(logInFB("User auth failed"));
      }
    });
  };
}
