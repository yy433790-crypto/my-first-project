const movieList = [

{
title:"Kalki",
image:"images/movie1.jpg",
description:"Action Adventure Movie",
video:"https://res.cloudinary.com/dwzesxnis/video/upload/v1782198225/kalki_ywrwaj.mp4"
},


{
title:"Akanda",
image:"images/movie2.jpg",
description:"Action Adventure Movie",
video:"https://res.cloudinary.com/dwzesxnis/video/upload/v1782194081/Akanda_gnye8z.mp4"
},


{
title:"OG",
image:"images/movie3.jpg",
description:"Superhero Movie",
video:"https://res.cloudinary.com/dwzesxnis/video/upload/v1782194106/OG_Nobita_jrvtfx.mp4"
},
{
    title:"Pushpa",
    image:"images/movie4.jpg",
    description:"Arripappa Movie",
    video:"https://res.cloudinary.com/dwzesxnis/video/upload/v1782200197/Pushpa_2_zqtfmj.mp4"
},
{
    title:"Peddi",
    image:"images/movie5.jpg",
    description:"Cross Good Player",
    video:"https://res.cloudinary.com/dwzesxnis/video/upload/v1782200199/peddi_x2yzpc.mp4"
},
{
    title:"Rajsaab",
    image:"images/movie6.jpg",
    description:"Horror Movie",
    video:"https://res.cloudinary.com/dwzesxnis/video/upload/v1782200207/Raajasaab_oetzf0.mp4"
},
{
    title:"Hanuman",
    image:"images/movie7.jpg",
    description:"Lord movie",
    video:"https://res.cloudinary.com/dwzesxnis/video/upload/v1782200312/Hanuman_j0wqv4.mp4"
},
{
    title:"Nota",
    image:"images/movie8.jpg",
    description:"Rowdy CM",
    video:"https://res.cloudinary.com/dwzesxnis/video/upload/v1782200300/Nota_Nobita_vin7xj.mp4"
},
{
    title:"Mirai",
    image:"images/movie9.jpg",
    description:"Lord Movie",
    video:"",
}

];
const videos = [

{
title:"Doraemon videos",
description:"Doraemon adventure movie",
url:"https://res.cloudinary.com/dwzesxnis/video/upload/v1782198225/kalki_ywrwaj.mp4"
},


{
title:"Movie 2",
description:"Action Movie",
url:"https://res.cloudinary.com/dwzesxnis/video/upload/v1782194081/Akanda_gnye8z.mp4"
},


{
title:"Movie 3",
description:"Comedy Movie",
url:"https://res.cloudinary.com/dwzesxnis/video/upload/v1782194106/OG_Nobita_jrvtfx.mp4"
}


];
firebase.auth().onAuthStateChanged((user)=>{

if(user){

localStorage.setItem(
"currentUser",
user.displayName
);

localStorage.setItem(
"userPhoto",
user.photoURL
);

}

});
const user =
localStorage.getItem("currentUser");

const userSection =
document.getElementById("userSection");


const photo =
localStorage.getItem("userPhoto");


if(user){

userSection.innerHTML = `

<div class="profile-container">


<img
src="${photo || 'images/user.png'}"
class="profile-pic"
onclick="toggleMenu()">



<div
id="dropdownMenu"
class="dropdown-menu">


<p>
👤 ${user}
</p>


<a href="#">
👤 My Profile
</a>


<a href="#">
❤️ My List
</a>


<a href="#">
▶ Watch History
</a>


<a href="#">
⚙ Settings
</a>


<button onclick="logout()">
🚪 Logout
</button>


</div>


</div>


`;



}else{


userSection.innerHTML = `


<button 
class="login-home-btn"
onclick="goLogin()">

Login

</button>


`;}
function goLogin(){

window.location.href =
"login.html";

}

function logout(){

firebase.auth().signOut()
.then(() => {

localStorage.clear();

window.location.replace(
"index.html"
);

})
.catch((error) => {

console.error(error);

alert(
"Logout Failed"
);

});

}

function watchMovie(){


let video =
localStorage.getItem("movieVideo");


if(video){

window.location.href =
"watch.html";


}else{


alert("Video not available");


}


}
function toggleMenu(){

const menu =
document.getElementById(
"dropdownMenu"
);

if(
menu.style.display ===
"block"
){

menu.style.display =
"none";

}else{

menu.style.display =
"block";

}

}
function openDetails(
title,
image,
description,
video
){


localStorage.setItem(
"movieTitle",
title
);


localStorage.setItem(
"movieImage",
image
);


localStorage.setItem(
"movieDescription",
description
);


localStorage.setItem(
"movieVideo",
video
);



window.location.href =
"movie-details.html";


}
const movieBox =
document.getElementById("movies");


if(movieBox){


movieList.forEach(movie=>{


movieBox.innerHTML += `


<div class="movie-card">


<img

src="${movie.image}"

onclick="openDetails(
'${movie.title}',
'${movie.image}',
'${movie.description}',
'${movie.video}'
)"


>

</div>


`;


});


}