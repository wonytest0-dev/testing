const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSCXwMNMSaRacAP61nQDfYphepvtXUFXGSCetcC1CpCjx2N22qr2lAdlj9K0h6JkGKTXeLRQL_LDqcs/pub?output=csv";

/* CSV PARSER AMAN */
function parseCSV(text) {
const rows = [];
let current = '';
let insideQuotes = false;
let row = [];

for (let i = 0; i < text.length; i++) {
const char = text[i];
const nextChar = text[i + 1];

if (char === '"' && insideQuotes && nextChar === '"') {
current += '"';
i++;
} else if (char === '"') {
insideQuotes = !insideQuotes;
} else if (char === ',' && !insideQuotes) {
row.push(current);
current = '';
} else if (char === '\n' && !insideQuotes) {
row.push(current);
rows.push(row);
row = [];
current = '';
} else {
current += char;
}
}

if (current) row.push(current);
if (row.length) rows.push(row);

return rows;
}

fetch(sheetURL)
.then(res => res.text())
.then(csv => {

const data = parseCSV(csv);
const rows = data.slice(1);

const container = document.getElementById("community-container");
const type = container.dataset.type;

container.innerHTML = "";

rows.reverse().forEach(col => {

const category = col[0];
const title = col[1];
const image = col[2];
const desc = col[3];
const date = col[4];
const link = col[5];

if (!category) return;

/* 🔥 FIX SATU-SATUNYA DI SINI */
if (category.trim().toLowerCase() !== type.trim().toLowerCase()) return;

const safeLink = link && link.startsWith("http") ? link : "#";

const card = document.createElement("div");
card.className = "community-card";

card.innerHTML = `

<img src="${image}" class="community-image">

<h3>${title}</h3>

<p class="community-desc">${desc}</p>

<p class="community-date">${date}</p>

<a href="${safeLink}" target="_blank" class="community-btn">
READ MORE
</a>

`;

container.appendChild(card);

});

});