const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRuWOcnG06qU_fyijx7OKJCtJ7c_DN5O4XTtWWTctzkqz0RBHi-XtlA4H8PN7p-J1MxjCTEfbKKhwWm/pub?output=csv";


fetch(sheetURL)
.then(res => res.text())
.then(csv => {

const rows = csv.trim().split("\n").slice(1);

const container = document.getElementById("project-container");

container.innerHTML = "";

rows.reverse().forEach(row => {

const columns = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

if(columns.length < 5) return;

const title = columns[0];
const image = columns[1];
const desc = columns[2];
const date = columns[3];
const link = columns[4];

if(!title) return;

const safeLink = link && link.startsWith("http") ? link : "#";

const card = document.createElement("div");
card.className = "project-card";

card.innerHTML = `

<img src="${image}" class="project-image">

<h3>${title}</h3>

<p class="project-desc">${desc}</p>

<p class="project-date">${date}</p>

<a href="${safeLink}" target="_blank" class="project-btn">
READ MORE
</a>

`;

container.appendChild(card);

});

})
.catch(err => {
console.error("ERROR:", err);
});