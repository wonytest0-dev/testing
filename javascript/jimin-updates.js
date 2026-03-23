const sheetURL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQeOErTlfiphGkaP4Qba0KMoHV3VMjV-Z-FE8GnmNo9zfjoTvtaZchNLqvqAN29PHGdEvOifCk7ArQf/pub?output=csv";

fetch(sheetURL)
.then(res => res.text())
.then(data => {

const rows = data.trim().split("\n").slice(1);

const container = document.getElementById("jimin-updates");

container.innerHTML = "";

rows.reverse().forEach(row => {

const columns = row.split(",");

const caption = columns[0];
const image = columns[1];
const link = columns[2];
const date = columns[3];

const card = document.createElement("div");

card.className = "update-card";

card.innerHTML = `

<img src="${image}" class="update-image">

<h3 class="update-title">${caption}</h3>

<div class="update-date">${date}</div>

<a href="${link}" target="_blank" class="update-btn">
VIEW POST
</a>

`;

container.appendChild(card);

});

});