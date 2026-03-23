const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTuO51vrHLkx_D7wTauUe767HC68Hu6-bfVGXDm3nFY6_DrpaBX624WNLlggmi71o1GoCk9uzIvT0FI/pub?output=csv";

fetch(sheetURL)
.then(res => res.text())
.then(csv => {

const rows = csv.split("\n").slice(1);

const wrapper = document.getElementById("media-wrapper");

rows.forEach(row => {

const columns = row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);

if(!columns) return;

const image = columns[0]?.replace(/"/g,"");
const quote = columns[1]?.replace(/"/g,"");
const source = columns[2]?.replace(/"/g,"");
const link = columns[3]?.replace(/"/g,"");

if(!image) return;

const slide = document.createElement("div");
slide.className = "swiper-slide media-card";

slide.innerHTML = `

<img src="${image}" class="media-image">

<p class="media-quote">
${quote}
</p>

<p class="media-source">
— ${source}
</p>

<a href="${link}" target="_blank" class="media-link">
READ MORE
</a>

`;

wrapper.appendChild(slide);

});


new Swiper(".media-swiper",{

slidesPerView:1,
centeredSlides:true,
loop:true,

autoplay:{
delay:5000,
disableOnInteraction:false
},

pagination:{
el:".swiper-pagination",
clickable:true
},

navigation:{
nextEl:".swiper-button-next",
prevEl:".swiper-button-prev"
}

});

});