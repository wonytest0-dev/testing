document.addEventListener("DOMContentLoaded", function(){

/* =========================
ALL ALBUM SLIDERS
========================= */

document.querySelectorAll(".album-wrapper").forEach(function(wrapper){

const slider = wrapper.querySelector(".album-slider");
const leftArrow = wrapper.querySelector(".album-arrow.left");
const rightArrow = wrapper.querySelector(".album-arrow.right");

if(!slider) return;

/* PANAH KANAN */

if(rightArrow){
rightArrow.addEventListener("click", function(){

slider.scrollBy({
left:200,
behavior:"smooth"
});

});
}

/* PANAH KIRI */

if(leftArrow){
leftArrow.addEventListener("click", function(){

slider.scrollBy({
left:-200,
behavior:"smooth"
});

});
}

/* AUTO SLIDE */

setInterval(function(){

slider.scrollBy({
left:200,
behavior:"smooth"
});

if(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth){

slider.scrollTo({
left:0,
behavior:"smooth"
});

}

},4000);

});


/* =========================
MUSE + TRUTH UNTOLD SLIDERS
========================= */

document.querySelectorAll(".muse-wrapper").forEach(function(wrapper){

const museSlider = wrapper.querySelector(".muse-slider");
const leftBtn = wrapper.querySelector(".muse-arrow.left");
const rightBtn = wrapper.querySelector(".muse-arrow.right");

let scrollAmount = 0;

if(!museSlider) return;


/* PANAH KANAN */

function slideRight(){

scrollAmount += 220;

museSlider.scrollTo({
left:scrollAmount,
behavior:"smooth"
});

}


/* PANAH KIRI */

function slideLeft(){

scrollAmount -= 220;

if(scrollAmount < 0){
scrollAmount = 0;
}

museSlider.scrollTo({
left:scrollAmount,
behavior:"smooth"
});

}


if(rightBtn){
rightBtn.onclick = slideRight;
}

if(leftBtn){
leftBtn.onclick = slideLeft;
}


/* AUTO SLIDE */

setInterval(function(){

scrollAmount += 220;

if(scrollAmount >= museSlider.scrollWidth){
scrollAmount = 0;
}

museSlider.scrollTo({
left:scrollAmount,
behavior:"smooth"
});

},4500);

});

});
