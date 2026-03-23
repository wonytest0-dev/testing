const elements = document.querySelectorAll(
"section, .muse-card, .quote-card, .hero-content, .profile-title, .about-jimin"
);

elements.forEach(el => {
el.classList.add("reveal");
});

function revealOnScroll(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach((element)=>{

const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;

const revealPoint = 120;

if(elementTop < windowHeight - revealPoint){
element.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);