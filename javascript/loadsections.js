function loadComponent(id, file){

fetch(file)
.then(function(response){
return response.text();
})
.then(function(data){

const element = document.getElementById(id);

if(!element) return;

element.innerHTML = data;

/* INIT MENU */

if(id === "header"){
if(typeof initMenu === "function"){
initMenu();
}
}

/* INIT MUSIC */

if(id === "backgroundmusic"){
if(typeof initMusic === "function"){
initMusic();
}
}

/* INIT CALENDAR */

if(id === "calendar"){
if(typeof initCalendar === "function"){
initCalendar();
}
}

/* INIT FOLLOW */

if(id === "footer"){
if(typeof initFollowSlider === "function"){
initFollowSlider();
}
}

})
.catch(function(error){
console.log("Component load error:", error);
});

}

/* LOAD COMPONENTS */

loadComponent("header","/components/header.html");

loadComponent("backgroundmusic","/components/backgroundmusic.html");

loadComponent("calendar","/components/calendar.html");

loadComponent("footer","/components/footer.html");
