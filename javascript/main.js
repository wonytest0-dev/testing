document.addEventListener("DOMContentLoaded", function(){

const container = document.getElementById("latest-jimin-update");

if(!container) return;

const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQeOErTlfiphGkaP4Qba0KMoHV3VMjV-Z-FE8GnmNo9zfjoTvtaZchNLqvqAN29PHGdEvOifCk7ArQf/pub?output=csv";

fetch(sheetURL)
.then(res => res.text())
.then(data => {

const rows = data.trim().split("\n").slice(1);

const latest = rows[rows.length - 1];

const columns = latest.split(",");

const caption = columns[0];
const image = columns[1];
const link = columns[2];
const date = columns[3];

container.innerHTML = `

<div class="preview-update-card">

<img src="${image}" class="preview-update-img">

<div class="preview-envelope-right"></div>

<div class="preview-update-info">

<div class="preview-update-caption">${caption}</div>

<div class="preview-update-date">${date}</div>

<a href="/navigation/daily/photos.html" class="preview-update-btn">
READ MORE
</a>

</div>

</div>

`;

});

});