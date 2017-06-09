import {fb, logInFBGoogle} from '../myFireBase';

export const LOGINFB = 'LOGINFB'
export const VOTE ='VOTE'
export const FBVOTE ='FBVOTE'
export const PAGELODE = 'PAGELODE'
export const CHANGEUSER = 'CHANGEUSER'
export const CREATEROOM = 'CREATEROOM'

export function logInFB(actUser) {
  return {type: LOGINFB, actUser}
}


export function vote(userVote) {
  return {type:VOTE, userVote}
}


export function fbVote(userVote){
  console.log(fb.auth().currentUser.uid +'/'+ fb.auth().currentUser.uid+'/vote');
  return dispatch =>{
    fb.database().ref().child(fb.auth().currentUser.uid +'/'+ fb.auth().currentUser.uid)
    .update({vote:userVote});
    dispatch(vote(userVote));
  };
}

export function pageLoad(){
  return dispatch =>{
    fb.auth().onAuthStateChanged(function(user) {
      if (user) {
        dispatch(logInFB(fb.auth().currentUser.displayName));
        dispatch(createRoom(fb.auth().currentUser));
      } else {
        logInFBGoogle();
      }
    });
  };
}

export function changeUser(){
  return dispatch =>{
    logInFBGoogle();
    fb.auth().onAuthStateChanged(function(user) {
      if (user) {
        dispatch(logInFB(fb.auth().currentUser.displayName));
        dispatch(createRoom(fb.auth().currentUser));
      } else {
        dispatch(logInFB("User auth failed"));
      }
    });
  };
}

export function createRoom(actUser){
  return dispatch => fb.database().ref(actUser.uid).child(actUser.uid).set({
    username: actUser.displayName,
    vote: 0
  });

}
