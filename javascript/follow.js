document.addEventListener("click", function(e){

const slider = document.getElementById("followSlider");
if(!slider) return;

/* PANAH KANAN */
if(e.target.closest(".follow-arrow.right")){
slider.scrollLeft += 200;
}

/* PANAH KIRI */
if(e.target.closest(".follow-arrow.left")){
slider.scrollLeft -= 200;
}

});




/* POP UP */

document.addEventListener("DOMContentLoaded", function(){

const popup = document.getElementById("musePopup");
const closeBtn = document.getElementById("closeMuse");

/* tampilkan popup setiap refresh */

if(popup){
popup.style.display = "flex";
}

/* tombol close */

if(closeBtn){
closeBtn.onclick = function(){
popup.style.display = "none";
};
}

});