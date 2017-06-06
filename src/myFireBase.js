import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyDNKd2tE3kqDyYUz-4gaySs6c53Kdqt5-8",
  authDomain: "feb-vote.firebaseapp.com",
  databaseURL: "https://feb-vote.firebaseio.com",
  // projectId: "feb-vote",
  storageBucket: "feb-vote.appspot.com",
  // messagingSenderId: "130741246766"
};
firebase.initializeApp(config);

//let dbFireBase = firebase.database();

export const fb =firebase;

export var logInFBGoogle= () =>{
  let provider = new firebase.auth.GoogleAuthProvider();

  console.log('authCalled');

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  //console.log(firebase.auth().currentUser.email);
}

//let dbFireBase = firebase.database();

//console.log(user);
//var test = ()=>{



  //
  // firebase.auth().signInWithRedirect(provider);
  //
  // firebase.auth().getRedirectResult().then(function(result) {
  //   if (result.credential) {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     var token = result.credential.accessToken;
  //     // ...
  //   }
  //   // The signed-in user info.
  //   var user = result.user;
  //   //console.log(user.displayName);
  // }).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // The email of the user's account used.
  //   var email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   var credential = error.credential;
  //   // ...
  // });
  // return 'b';



  //   const provider = firebase.auth.GoogleAuthProvider;
  // const credential = provider.credential(token);
  // firebase.auth().signInWithCredential(credential)
  //   .then((data) => {
  //     console.log('SUCCESS', data);
  //   })
  //   .catch((error) => {
  //     console.log('ERROR', error)
  //   });

  // const provider = new firebase.auth.GoogleAuthProvider();
  // provider.addScope('profile');
  // provider.addScope('email');
  // firebase.auth().signInWithRedirect(provider)
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })

//}

// database.ref('/').once('value', snap => {
//   const userDB = snap.val();
// });

// const dbRefObj = firebase.database().ref().child('test');
//
// dbRefObj.on('value', snap => {
//   console.log(snap.val())
// });


  //
  // const dbRefObj = firebase.database().ref().child('vote');
  //
  // dbRefObj.on('value', snap => {
  //   console.log(snap.val())
  // });
