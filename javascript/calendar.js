function initCalendar(){

const monthLabel = document.getElementById("calendarMonth");
const datesContainer = document.getElementById("calendarDates");
const prevBtn = document.getElementById("prevMonth");
const nextBtn = document.getElementById("nextMonth");

let currentDate = new Date();
const today = new Date();

/* EVENTS DARI HTML */

const events = [];

document.querySelectorAll(".event-data").forEach(el => {

events.push({
day: parseInt(el.dataset.day),
month: parseInt(el.dataset.month),
icon: el.dataset.icon,
title: el.dataset.title,
text: el.dataset.text,
link: el.dataset.link || "",
image: el.dataset.image
});

});

function render(){

const year = currentDate.getFullYear();
const month = currentDate.getMonth()+1;

const firstDay = new Date(year,month-1,1).getDay();
const lastDate = new Date(year,month,0).getDate();

const months = [
"January","February","March","April","May","June",
"July","August","September","October","November","December"
];

monthLabel.textContent = months[month-1]+" "+year;

datesContainer.innerHTML="";

/* EMPTY BOX */

for(let i=0;i<firstDay;i++){
datesContainer.innerHTML += "<div></div>";
}

/* CREATE DAYS */

for(let day=1;day<=lastDate;day++){

let box = document.createElement("div");

let event = events.find(e => e.day === day && e.month === month);

if(event){

box.classList.add("event");
box.innerHTML = day+" "+event.icon;

box.onclick=function(){

document.getElementById("eventPopup").style.display="flex";

const title = document.getElementById("eventTitle");
const text = document.getElementById("eventText");
const image = document.getElementById("eventImage");

title.textContent = event.title;
image.src = event.image;

/* TEXT + LINK */

if(event.link && event.link !== ""){
text.innerHTML = event.text + "<br><br><a href='"+event.link+"' target='_blank'>View Tweet</a>";
}else{
text.textContent = event.text;
}

};

}else{

box.textContent = day;

}

/* TODAY MARK */

if(
day===today.getDate() &&
month===today.getMonth()+1 &&
year===today.getFullYear()
){
box.classList.add("today");
}

datesContainer.appendChild(box);

}

}

/* MONTH BUTTONS */

prevBtn.onclick=function(){
currentDate.setMonth(currentDate.getMonth()-1);
render();
}

nextBtn.onclick=function(){
currentDate.setMonth(currentDate.getMonth()+1);
render();
}

render();

}

/* CLOSE POPUP */

function closeEvent(){
document.getElementById("eventPopup").style.display="none";
}

initCalendar();
