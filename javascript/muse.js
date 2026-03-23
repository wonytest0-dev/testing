(function(){

const track = document.querySelector(".review-track");
const items = document.querySelectorAll(".review-item");
const dots = document.querySelectorAll(".dot");

const prev = document.querySelector(".review-prev");
const next = document.querySelector(".review-next");

let index = 0;

function updateSlider(){

track.style.transform =` translateX(-${index * 100}%)`;

dots.forEach(dot => dot.classList.remove("active"));
dots[index].classList.add("active");

}

/* next */

next.addEventListener("click", ()=>{

index++;

if(index >= items.length){
index = 0;
}

updateSlider();

});

/* prev */

prev.addEventListener("click", ()=>{

index--;

if(index < 0){
index = items.length - 1;
}

updateSlider();

});

/* dot click */

dots.forEach((dot,i)=>{

dot.addEventListener("click", ()=>{

index = i;

updateSlider();

});

});

/* swipe support */

let startX = 0;
let endX = 0;

track.addEventListener("touchstart",(e)=>{

startX = e.touches[0].clientX;

});

track.addEventListener("touchmove",(e)=>{

endX = e.touches[0].clientX;

});

track.addEventListener("touchend",()=>{

let diff = startX - endX;

if(Math.abs(diff) > 50){

if(diff > 0){

index++;

if(index >= items.length){
index = 0;
}

}else{

index--;

if(index < 0){
index = items.length - 1;
}

}

updateSlider();

}

});

})();

/* BLOOMING PHOTO SLIDER */

(function(){

const track = document.querySelector(".photo-track");
if(!track) return; // supaya tidak error jika section tidak ada

const slides = track.querySelectorAll("img");
const dots = document.querySelectorAll(".photo-dot");

const prev = document.querySelector(".photo-prev");
const next = document.querySelector(".photo-next");

let bloomingIndex = 0;

function bloomingUpdate(){

track.style.transform = `translateX(-${bloomingIndex * 100}%)`;

dots.forEach(dot=>dot.classList.remove("active"));

if(dots[bloomingIndex]){
dots[bloomingIndex].classList.add("active");
}

}

/* NEXT */

next?.addEventListener("click",()=>{

bloomingIndex++;

if(bloomingIndex >= slides.length){
bloomingIndex = 0;
}

bloomingUpdate();

});

/* PREV */

prev?.addEventListener("click",()=>{

bloomingIndex--;

if(bloomingIndex < 0){
bloomingIndex = slides.length - 1;
}

bloomingUpdate();

});

/* DOT CLICK */

dots.forEach((dot,i)=>{

dot.addEventListener("click",()=>{

bloomingIndex = i;

bloomingUpdate();

});

});

/* SWIPE SUPPORT */

let startX = 0;
let endX = 0;

track.addEventListener("touchstart",(e)=>{

startX = e.touches[0].clientX;

});

track.addEventListener("touchmove",(e)=>{

endX = e.touches[0].clientX;

});

track.addEventListener("touchend",()=>{

let diff = startX - endX;

if(Math.abs(diff) > 50){

if(diff > 0){

bloomingIndex++;

if(bloomingIndex >= slides.length){
bloomingIndex = 0;
}

}else{

bloomingIndex--;

if(bloomingIndex < 0){
bloomingIndex = slides.length - 1;
}

}

bloomingUpdate();

}

});

})();

/* SERENADE PHOTO SLIDER */

(function(){

const track = document.querySelector(".serenade-track");
if(!track) return;

const slides = track.querySelectorAll("img");
const dots = document.querySelectorAll(".serenade-dot");

const prev = document.querySelector(".serenade-prev");
const next = document.querySelector(".serenade-next");

let serenadeIndex = 0;

function serenadeUpdate(){

track.style.transform = `translateX(-${serenadeIndex * 100}%)`;

dots.forEach(dot=>dot.classList.remove("active"));

if(dots[serenadeIndex]){
dots[serenadeIndex].classList.add("active");
}

}

next?.addEventListener("click",()=>{

serenadeIndex++;

if(serenadeIndex >= slides.length){
serenadeIndex = 0;
}

serenadeUpdate();

});

prev?.addEventListener("click",()=>{

serenadeIndex--;

if(serenadeIndex < 0){
serenadeIndex = slides.length - 1;
}

serenadeUpdate();

});

dots.forEach((dot,i)=>{

dot.addEventListener("click",()=>{

serenadeIndex = i;

serenadeUpdate();

});

});

/* swipe */

let startX=0,endX=0;

track.addEventListener("touchstart",e=>{
startX = e.touches[0].clientX;
});

track.addEventListener("touchmove",e=>{
endX = e.touches[0].clientX;
});

track.addEventListener("touchend",()=>{

let diff = startX - endX;

if(Math.abs(diff)>50){

if(diff>0){

serenadeIndex++;
if(serenadeIndex>=slides.length) serenadeIndex=0;

}else{

serenadeIndex--;
if(serenadeIndex<0) serenadeIndex=slides.length-1;

}

serenadeUpdate();

}

});

})();

/* YOUTUBE LAZY LOAD */

(function(){

const wrappers = document.querySelectorAll(".youtube-wrapper");

wrappers.forEach(wrapper=>{

wrapper.addEventListener("click",function(){

const id = this.dataset.id;

const iframe = document.createElement("iframe");

iframe.src =` https://www.youtube.com/embed/${id}?autoplay=1`;

iframe.setAttribute("frameborder","0");
iframe.setAttribute("allow","autoplay; encrypted-media");
iframe.setAttribute("allowfullscreen","");

iframe.style.width="100%";
iframe.style.height="400px";
iframe.style.borderRadius="12px";

this.innerHTML="";
this.appendChild(iframe);

});

});

})();

(function(){

const track = document.querySelector(".musemoment-track");
if(!track) return;

const slides = document.querySelectorAll(".musemoment-item");
const dotsContainer = document.querySelector(".musemoment-dots");

let index = 0;

slides.forEach((_,i)=>{

const dot=document.createElement("div");
dot.className="musemoment-dot";

dot.addEventListener("click",()=>{
index=i;
update();
});

dotsContainer.appendChild(dot);

});

function update(){

const slideWidth = slides[0].offsetWidth + 30;

track.style.transform =
`translateX(calc(50% - ${slideWidth/2}px - ${index*slideWidth}px))`;

slides.forEach(s=>s.classList.remove("active"));
slides[index].classList.add("active");

document.querySelectorAll(".musemoment-dot")
.forEach(d=>d.classList.remove("active"));

document.querySelectorAll(".musemoment-dot")[index]
.classList.add("active");

}

update();

/* swipe */

let startX=0;

track.addEventListener("touchstart",e=>{
startX=e.touches[0].clientX;
});

track.addEventListener("touchend",e=>{

let endX=e.changedTouches[0].clientX;

if(startX-endX>50){
index++;
if(index>=slides.length) index=slides.length-1;
}

if(endX-startX>50){
index--;
if(index<0) index=0;
}

update();

});

})();

(function(){

const track = document.querySelector(".discography-track");
if(!track) return;

const slides = document.querySelectorAll(".discography-item");
const dotsContainer = document.querySelector(".discography-dots");

const prev = document.querySelector(".discography-prev");
const next = document.querySelector(".discography-next");

let index = 0;

/* create dots */

slides.forEach((_,i)=>{

const dot=document.createElement("div");
dot.className="discography-dot";

dot.onclick=()=>{
index=i;
update();
};

dotsContainer.appendChild(dot);

});

/* update */

function update(){

const width = slides[0].offsetWidth + 40;

track.style.transform =
`translateX(calc(50% - ${width/2}px - ${index*width}px))`;

slides.forEach(s=>s.classList.remove("active"));
slides[index].classList.add("active");

document.querySelectorAll(".discography-dot")
.forEach(d=>d.classList.remove("active"));

document.querySelectorAll(".discography-dot")[index]
.classList.add("active");

}

update();

/* arrows */

next.onclick=()=>{
index++;
if(index>=slides.length) index=0;
update();
};

prev.onclick=()=>{
index--;
if(index<0) index=slides.length-1;
update();
};

/* swipe */

let startX=0;

track.addEventListener("touchstart",e=>{
startX=e.touches[0].clientX;
});

track.addEventListener("touchend",e=>{

let endX=e.changedTouches[0].clientX;

if(startX-endX>50){
index++;
if(index>=slides.length) index=slides.length-1;
}

if(endX-startX>50){
index--;
if(index<0) index=0;
}

update();

});

/* auto slide */

setInterval(()=>{

index++;

if(index>=slides.length){
index=0;
}

update();

},4000);

})();