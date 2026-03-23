const voteHeaders = document.querySelectorAll(".vote-header");

voteHeaders.forEach(header => {

header.addEventListener("click", () => {

const item = header.parentElement;

const body = header.nextElementSibling;

item.classList.toggle("active");

body.style.display =
body.style.display === "block" ? "none" : "block";

});

});

const voteSection = document.querySelector(".vote-parallax");
const voteBg = document.querySelector(".vote-bg");

window.addEventListener("scroll", () => {

if(!voteSection || !voteBg) return;

const rect = voteSection.getBoundingClientRect();

const speed = 0.3;

voteBg.style.transform =
`translateY(${rect.top * speed}px)`;

});