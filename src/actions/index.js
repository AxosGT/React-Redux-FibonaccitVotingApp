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


export function vote(intVote) {
  return {type: VOTE, intVote}
}


export function fbVote(userVote){
  return dispatch =>{

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
    var test = fb.database().ref().child(fb.auth().currentUser.uid+'');
    test.on('value', snap =>console.log(snap.val()));
  };
}

export function createRoom(actUser){
  //console.log(fb.auth().currentUser.providerData);
  return dispatch => fb.database().ref(actUser.uid).child(actUser.displayName).set({
    username: actUser.displayName,
    uid: actUser.uid,
    vote: 0
  });

}
