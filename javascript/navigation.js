function initMenu(){

const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");

if(!menuBtn || !sideMenu) return;

/* OPEN MENU */

menuBtn.addEventListener("click",function(){

menuBtn.classList.toggle("active");
sideMenu.classList.toggle("active");
overlay.classList.toggle("active");

});

/* CLOSE MENU WHEN CLICK OVERLAY */

overlay.addEventListener("click",function(){

menuBtn.classList.remove("active");
sideMenu.classList.remove("active");
overlay.classList.remove("active");

});

/* SUBMENU */

document.querySelectorAll(".menu-title").forEach(function(title){

title.addEventListener("click",function(){

this.parentElement.classList.toggle("active");

});

});

}
