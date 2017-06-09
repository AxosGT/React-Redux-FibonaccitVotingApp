import {fb, logInFBGoogle} from '../myFireBase';

export const USERINFO ='USERINFO'
export const FBVOTE ='FBVOTE'
export const PAGELODE = 'PAGELODE'
export const CHANGEUSER = 'CHANGEUSER'
export const CREATEROOM = 'CREATEROOM'
export const PAGEVIEW = 'PAGEVIEW'

export function pageView(pageV){

  return {type:PAGEVIEW, pageV}
}

export function userInfo(myVote) {
  return dispatch =>{
    fb.database().ref().child(fb.auth().currentUser.uid +'/'+ fb.auth().currentUser.uid)
    .on('value',snap => {
      dispatch({
        type: USERINFO,
        myVote: snap.val().vote,
        uid: fb.auth().currentUser.uid,
        displayName: fb.auth().currentUser.displayName,
        email: fb.auth().currentUser.email
      });
      //console.log(snap.val());
    });
  };
}


export function fbVote(userVote){
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
        dispatch(createRoom(fb.auth().currentUser));
        dispatch(userInfo());
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
        dispatch(createRoom(fb.auth().currentUser));
      } else {
        console.log("User auth failed");
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
