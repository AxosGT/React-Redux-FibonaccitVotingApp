import {fb, logInFBGoogle} from '../myFireBase';

export const LOGINFB = 'LOGINFB'
export const VOTE ='VOTE'
export const FBVOTE ='FBVOTE'
export const PAGELODE = 'PAGELODE'
export const CHANGEUSER = 'CHANGEUSER'
export const CREATEROOM = 'CREATEROOM'
export const PAGEVIEW = 'PAGEVIEW'

export function logInFB(actUser) {

  return {type: LOGINFB, actUser}
}

export function pageView(pageV){

  return {type:PAGEVIEW, pageV}
}

export function vote(myVote) {
  return dispatch =>{
    fb.database().ref().child(fb.auth().currentUser.uid +'/'+ fb.auth().currentUser.uid)
    .on('value',snap => {
      dispatch({
        type: VOTE,
        myVote: snap.val().vote
      });
      console.log(snap.val().vote);
    });
  };
}


export function fbVote(userVote){
  //console.log(fb.auth().currentUser.uid +'/'+ fb.auth().currentUser.uid+'/vote');
  return dispatch =>{
    fb.auth().onAuthStateChanged(function(user) {
      if (user) {
        fb.database().ref().child(fb.auth().currentUser.uid +'/'+ fb.auth().currentUser.uid)
        .update({vote:userVote});
      }else{
        dispatch(changeUser());
      }
    });
  };
}

export function pageLoad(){
  return dispatch =>{
    fb.auth().onAuthStateChanged(function(user) {
      if (user) {
        dispatch(logInFB(fb.auth().currentUser.displayName));
        dispatch(createRoom(fb.auth().currentUser));
        dispatch(vote());
      } else {
        logInFBGoogle();
      }
    });
  };
}

export function changeUser(){
  return dispatch =>{
    dispatch(pageView('home'));
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
