document.addEventListener("DOMContentLoaded", function(){

/* =========================
REVEAL
========================= */

const reveals = document.querySelectorAll(".face-reveal");

function revealOnScroll(){

const windowHeight = window.innerHeight;

reveals.forEach(function(el){

const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 120){
el.classList.add("active");
}

});

}

/* =========================
SCROLL EVENT
========================= */

window.addEventListener("scroll", function(){

revealOnScroll();
parallaxScroll();

});

/* =========================
INITIAL LOAD
========================= */

revealOnScroll();
parallaxScroll();

});

/* =========================
REVIEW SLIDER
========================= */

document.addEventListener("DOMContentLoaded", function(){

const slider = document.querySelector(".review-slider");

if(!slider) return;

const track = slider.querySelector(".review-track");
const slides = slider.querySelectorAll(".review-item");

const nextBtn = slider.querySelector(".review-btn.next");
const prevBtn = slider.querySelector(".review-btn.prev");

let index = 0;

nextBtn.addEventListener("click", function(){

index++;

if(index >= slides.length){
index = 0;
}

track.style.transform = `translateX(-${index * 100}%)`;

});

prevBtn.addEventListener("click", function(){

index--;

if(index < 0){
index = slides.length - 1;
}

track.style.transform = `translateX(-${index * 100}%)`;

});

});

document.addEventListener("DOMContentLoaded", function(){

const sliders = document.querySelectorAll(".concept-slider");

sliders.forEach(function(slider){

const track = slider.querySelector(".concept-track");
const slides = track.querySelectorAll("img");
const prevBtn = slider.querySelector(".concept-btn.prev");
const nextBtn = slider.querySelector(".concept-btn.next");
const dotsContainer = slider.querySelector(".concept-dots");

let index = 0;

slides.forEach(function(_, i){

const dot = document.createElement("div");
dot.classList.add("concept-dot");

if(i === 0){
dot.classList.add("active");
}

dot.addEventListener("click", function(){
index = i;
update();
});

dotsContainer.appendChild(dot);

});

function update(){

track.style.transform = `translateX(-${index * 100}%)`;

dotsContainer.querySelectorAll(".concept-dot")
.forEach(function(dot, i){
dot.classList.toggle("active", i === index);
});

}

nextBtn.addEventListener("click", function(){

index++;

if(index >= slides.length){
index = 0;
}

update();

});

prevBtn.addEventListener("click", function(){

index--;

if(index < 0){
index = slides.length - 1;
}

update();

});

});

});


document.querySelectorAll(".youtube-video").forEach(function(video){

video.addEventListener("click", function(){

const id = video.dataset.video;

video.innerHTML = `
<iframe
width="100%"
height="400"
src="https://www.youtube.com/embed/${id}?autoplay=1"
frameborder="0"
allow="autoplay; encrypted-media"
allowfullscreen>
</iframe>
`;

});

});

/* =========================
FACE MOMENT SLIDER
========================= */

document.addEventListener("DOMContentLoaded",function(){

const slider=document.querySelector(".face-moment-slider");

if(!slider) return;

const track=slider.querySelector(".face-moment-track");

const slides=slider.querySelectorAll(".face-moment-slide");

const dotsContainer=slider.querySelector(".face-moment-dots");

let index=0;

/* CREATE DOTS */

slides.forEach((_,i)=>{

const dot=document.createElement("div");

dot.className="face-moment-dot";

if(i===0) dot.classList.add("active");

dot.addEventListener("click",function(){

index=i;

updateSlider();

});

dotsContainer.appendChild(dot);

});

const dots=slider.querySelectorAll(".face-moment-dot");

/* UPDATE SLIDER */

function updateSlider(){

track.style.transform=`translateX(-${index*100}%)`;

dots.forEach(d=>d.classList.remove("active"));

dots[index].classList.add("active");

}

/* SWIPE MOBILE */

let startX=0;

slider.addEventListener("touchstart",e=>{
startX=e.touches[0].clientX;
});

slider.addEventListener("touchend",e=>{

let endX=e.changedTouches[0].clientX;

if(startX-endX>50){

index=(index+1)%slides.length;

}

if(endX-startX>50){

index=(index-1+slides.length)%slides.length;

}

updateSlider();

});

/* VIDEO PLAY */

document.querySelectorAll(".moment-video").forEach(video=>{

video.addEventListener("click",function(){

const id=this.dataset.id;

this.innerHTML=`<iframe width="100%" height="400"
src="https://www.youtube.com/embed/${id}?autoplay=1"
frameborder="0"
allow="autoplay; encrypted-media"
allowfullscreen></iframe>`;

});

});

});

/* =========================
FACE DISCOGRAPHY SLIDER
========================= */

document.addEventListener("DOMContentLoaded",function(){

const slider=document.querySelector(".face-discography-slider");

if(!slider) return;

const track=slider.querySelector(".face-discography-track");

const slides=slider.querySelectorAll(".face-discography-slide");

const dotsContainer=slider.querySelector(".face-discography-dots");

let index=0;

/* CREATE DOTS */

slides.forEach((_,i)=>{

const dot=document.createElement("div");

dot.className="face-discography-dot";

if(i===0) dot.classList.add("active");

dot.addEventListener("click",function(){

index=i;
updateSlider();

});

dotsContainer.appendChild(dot);

});

const dots=slider.querySelectorAll(".face-discography-dot");

/* UPDATE SLIDER */

function updateSlider(){

track.style.transform=`translateX(-${index*100}%)`;

dots.forEach(d=>d.classList.remove("active"));

dots[index].classList.add("active");

}

/* SWIPE MOBILE */

let startX=0;

slider.addEventListener("touchstart",e=>{
startX=e.touches[0].clientX;
});

slider.addEventListener("touchend",e=>{

let endX=e.changedTouches[0].clientX;

if(startX-endX>50){

index=(index+1)%slides.length;

}

if(endX-startX>50){

index=(index-1+slides.length)%slides.length;

}

updateSlider();

});

});