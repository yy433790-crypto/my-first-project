const firebaseConfig = {
  apiKey: "AIzaSyBfQdPhiI0BtjRqeoB2zjGPJyijCcCaRFc",
  authDomain: "movie-hub-640a1.firebaseapp.com",
  projectId: "movie-hub-640a1",
  storageBucket: "movie-hub-640a1.firebasestorage.app",
  messagingSenderId: "315751451556",
  appId: "1:315751451556:web:82a02be77a1136cd40cf31",
  measurementId: "G-JQQKFJ68PR"
};

firebase.initializeApp(
firebaseConfig
);

const auth =
firebase.auth();

document
.getElementById(
"googleLogin"
)
.addEventListener(
"click",
googleLogin
);

function googleLogin(){

const provider =
new firebase.auth.GoogleAuthProvider();

auth
.signInWithPopup(provider)

.then((result)=>{

const user =
result.user;

localStorage.setItem(
"userName",
user.displayName
);

localStorage.setItem(
"userEmail",
user.email
);

localStorage.setItem(
"userPhoto",
user.photoURL
);

window.location.href =
"index.html";

});

}