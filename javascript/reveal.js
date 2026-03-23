document.addEventListener("DOMContentLoaded", function(){

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

const windowHeight = window.innerHeight;

reveals.forEach(function(el){

const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);

/* run once on load */
revealOnScroll();

});

function playVideo(card,id){

card.innerHTML = `

<iframe  
width="100%"  
height="200"  
src="https://www.youtube.com/embed/${id}?autoplay=1"  
frameborder="0"  
allow="autoplay; encrypted-media"  
allowfullscreen>  
</iframe>  
`;  }


/* =========================
RECORDS SLIDER SCRIPT
========================= */

document.addEventListener("DOMContentLoaded", function(){

const track = document.querySelector(".records-track");
const slides = document.querySelectorAll(".record-slide");
const dotsContainer = document.querySelector(".records-dots");

if(!track) return;

let index = 0;

/* CREATE DOTS */

slides.forEach((_,i)=>{

if(i < slides.length - 2){

const dot = document.createElement("span");

if(i === 0) dot.classList.add("active");

dotsContainer.appendChild(dot);

dot.addEventListener("click",()=>{

index = i;
updateSlider();

});

}

});

const dots = document.querySelectorAll(".records-dots span");

/* UPDATE */

function updateSlider(){

track.style.transform = `translateX(-${index * 60}%)`;

slides.forEach(s => s.classList.remove("active"));

slides[index].classList.add("active");

dots.forEach(d => d.classList.remove("active"));

if(dots[index]) dots[index].classList.add("active");

}

/* AUTO SLIDE */

setInterval(()=>{

index++;

if(index >= slides.length - 2){

index = 0;

track.style.transition = "none";
track.style.transform = `translateX(0%)`;

setTimeout(()=>{
track.style.transition = "transform 0.8s ease";
},50);

}

updateSlider();

},5000);

/* SWIPE MOBILE */

let startX = 0;

track.addEventListener("touchstart",(e)=>{

startX = e.touches[0].clientX;

});

track.addEventListener("touchend",(e)=>{

let endX = e.changedTouches[0].clientX;

if(startX - endX > 50){

index++;

}

if(endX - startX > 50){

index--;

}

if(index < 0) index = slides.length - 3;

updateSlider();

});

/* FIRST ACTIVE */

slides[0].classList.add("active");

});
