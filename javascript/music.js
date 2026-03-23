function initMusic(){

const music = document.getElementById("bg-music");
const button = document.getElementById("music-btn");

if(!music || !button) return;

let playing = localStorage.getItem("musicPlaying") === "true";
let savedTime = localStorage.getItem("musicTime");

/* restore time */

if(savedTime){
music.currentTime = savedTime;
}

/* autoplay */

if(playing){
music.play().catch(()=>{});
button.innerText = "🎧";
}

/* toggle music */

button.addEventListener("click",function(){

if(music.paused){

music.play();
button.innerText = "🎧";
localStorage.setItem("musicPlaying",true);

}else{

music.pause();
button.innerText = "♫";
localStorage.setItem("musicPlaying",false);

}

});

/* save time */

window.addEventListener("beforeunload",function(){

localStorage.setItem("musicTime",music.currentTime);

});

}
