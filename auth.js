// SIGNUP

function signup(){

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const confirmPassword =
document.getElementById("confirmPassword").value;

if(password !== confirmPassword){

alert("Passwords do not match");

return;

}

const user = {

name,
email,
password

};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert(
"Account Created Successfully"
);

window.location.href =
"login.html";

}


// LOGIN

function login(){

const email =
document.getElementById("loginEmail").value;

const password =
document.getElementById("loginPassword").value;

const savedUser =
JSON.parse(
localStorage.getItem("user")
);

if(

savedUser &&
email === savedUser.email &&
password === savedUser.password

){

localStorage.setItem(
"currentUser",
savedUser.name
);

alert(
"Login Successful"
);

window.location.href =
"index.html";

}else{

alert(
"Invalid Email or Password"
);

}

}


// TEMPORARY GOOGLE LOGIN

function googleLogin(){

const provider =
new firebase.auth.GoogleAuthProvider();

auth
.signInWithPopup(provider)

.then((result)=>{

const user =
result.user;

localStorage.setItem(
"currentUser",
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

})

.catch((error)=>{

alert(
error.message
);

});

}