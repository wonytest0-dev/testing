(function(){

const slider = document.querySelector(".video-slider");

if(!slider) return;

const track = slider.querySelector(".slider-track");
const slides = slider.querySelectorAll(".video-slide");
const dotsContainer = slider.querySelector(".slider-dots");
const next = slider.querySelector(".arrow-right");
const prev = slider.querySelector(".arrow-left");

let index = 0;

/* CREATE DOTS */

slides.forEach((_,i)=>{

const dot = document.createElement("span");

if(i===0) dot.classList.add("active");

dot.addEventListener("click",()=>{

index=i;
update();

});

dotsContainer.appendChild(dot);

});

const dots = dotsContainer.querySelectorAll("span");

/* UPDATE */

function update(){

track.style.transform=`translateX(-${index*100}%)`;

dots.forEach(d=>d.classList.remove("active"));

dots[index].classList.add("active");

}

/* ARROWS */

next.addEventListener("click",()=>{

index=(index+1)%slides.length;
update();

});

prev.addEventListener("click",()=>{

index=(index-1+slides.length)%slides.length;
update();

});

/* AUTO SLIDE */

setInterval(()=>{

index=(index+1)%slides.length;

update();

},5000);

})();

(function(){

const slider=document.querySelector(".ser-slider");

if(!slider) return;

const track=slider.querySelector(".ser-track");
const slides=slider.querySelectorAll(".ser-slide");
const dotsContainer=slider.querySelector(".ser-dots");
const next=slider.querySelector(".ser-right");
const prev=slider.querySelector(".ser-left");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.addEventListener("click",()=>{

index=i;
update();

});

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function update(){

track.style.transform=`translateX(-${index*100}%)`;

dots.forEach(d=>d.classList.remove("active"));

dots[index].classList.add("active");

}

next.onclick=()=>{

index=(index+1)%slides.length;
update();

};

prev.onclick=()=>{

index=(index-1+slides.length)%slides.length;
update();

};

setInterval(()=>{

index=(index+1)%slides.length;

update();

},5000);

})();

(function(){

const slider=document.querySelector(".promise-slider");

if(!slider) return;

const track=slider.querySelector(".promise-track");
const slides=slider.querySelectorAll(".promise-slide");
const dotsContainer=slider.querySelector(".promise-dots");
const next=slider.querySelector(".promise-right");
const prev=slider.querySelector(".promise-left");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>{

index=i;
update();

};

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function update(){

track.style.transform=`translateX(-${index*100}%)`;

dots.forEach(d=>d.classList.remove("active"));

dots[index].classList.add("active");

}

next.onclick=()=>{

index=(index+1)%slides.length;
update();

};

prev.onclick=()=>{

index=(index-1+slides.length)%slides.length;
update();

};

setInterval(()=>{

index=(index+1)%slides.length;

update();

},5000);

})();

(function(){

const slider=document.querySelector(".friends-slider");

if(!slider) return;

const track=slider.querySelector(".friends-track");
const slides=slider.querySelectorAll(".friends-slide");
const dotsContainer=slider.querySelector(".friends-dots");
const next=slider.querySelector(".friends-right");
const prev=slider.querySelector(".friends-left");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>{

index=i;
update();

};

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function update(){

track.style.transform=`translateX(-${index*100}%)`;

dots.forEach(d=>d.classList.remove("active"));

dots[index].classList.add("active");

}

next.onclick=()=>{

index=(index+1)%slides.length;
update();

};

prev.onclick=()=>{

index=(index-1+slides.length)%slides.length;
update();

};

setInterval(()=>{

index=(index+1)%slides.length;

update();

},5000);

})();

(function(){

const slider=document.querySelector(".filter-slider");

if(!slider) return;

const track=slider.querySelector(".filter-track");
const slides=slider.querySelectorAll(".filter-slide");
const dotsContainer=slider.querySelector(".filter-dots");
const next=slider.querySelector(".filter-right");
const prev=slider.querySelector(".filter-left");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>{

index=i;
update();

};

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function update(){

track.style.transform=`translateX(-${index*100}%)`;

dots.forEach(d=>d.classList.remove("active"));

dots[index].classList.add("active");

}

next.onclick=()=>{

index=(index+1)%slides.length;
update();

};

prev.onclick=()=>{

index=(index-1+slides.length)%slides.length;
update();

};

setInterval(()=>{

index=(index+1)%slides.length;

update();

},5000);

})();

(function(){

const slider=document.querySelector(".christmas-slider");

if(!slider) return;

const track=slider.querySelector(".christmas-track");
const slides=slider.querySelectorAll(".christmas-slide");
const dotsContainer=slider.querySelector(".christmas-dots");
const next=slider.querySelector(".christmas-right");
const prev=slider.querySelector(".christmas-left");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>{

index=i;
update();

};

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function update(){

track.style.transform=`translateX(-${index*100}%)`;

dots.forEach(d=>d.classList.remove("active"));

dots[index].classList.add("active");

}

next.onclick=()=>{

index=(index+1)%slides.length;
update();

};

prev.onclick=()=>{

index=(index-1+slides.length)%slides.length;
update();

};

setInterval(()=>{

index=(index+1)%slides.length;

update();

},5000);

})();

(function(){

const slider=document.querySelector(".withyou-slider");

if(!slider) return;

const track=slider.querySelector(".withyou-track");
const slides=slider.querySelectorAll(".withyou-slide");
const dotsContainer=slider.querySelector(".withyou-dots");
const next=slider.querySelector(".withyou-right");
const prev=slider.querySelector(".withyou-left");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>{

index=i;
update();

};

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function update(){

track.style.transform=`translateX(-${index*100}%)`;

dots.forEach(d=>d.classList.remove("active"));

dots[index].classList.add("active");

}

next.onclick=()=>{

index=(index+1)%slides.length;
update();

};

prev.onclick=()=>{

index=(index-1+slides.length)%slides.length;
update();

};

setInterval(()=>{

index=(index+1)%slides.length;
update();

},5000);

})();

(function(){

const slider=document.querySelector(".vibe-slider");

if(!slider) return;

const track=slider.querySelector(".vibe-track");
const slides=slider.querySelectorAll(".vibe-slide");
const dotsContainer=slider.querySelector(".vibe-dots");
const next=slider.querySelector(".vibe-right");
const prev=slider.querySelector(".vibe-left");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>{

index=i;
update();

};

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function update(){

track.style.transform=`translateX(-${index*100}%)`;

dots.forEach(d=>d.classList.remove("active"));

dots[index].classList.add("active");

}

next.onclick=()=>{

index=(index+1)%slides.length;
update();

};

prev.onclick=()=>{

index=(index-1+slides.length)%slides.length;
update();

};

setInterval(()=>{

index=(index+1)%slides.length;

update();

},5000);

})();

(function(){

const slider=document.querySelector(".angel-slider");

if(!slider) return;

const track=slider.querySelector(".angel-track");
const slides=slider.querySelectorAll(".angel-slide");
const dotsContainer=slider.querySelector(".angel-dots");
const next=slider.querySelector(".angel-right");
const prev=slider.querySelector(".angel-left");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>{

index=i;
update();

};

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function update(){

track.style.transform=`translateX(-${index*100}%)`;

dots.forEach(d=>d.classList.remove("active"));

dots[index].classList.add("active");

}

next.onclick=()=>{

index=(index+1)%slides.length;
update();

};

prev.onclick=()=>{

index=(index-1+slides.length)%slides.length;
update();

};

setInterval(()=>{

index=(index+1)%slides.length;

update();

},5000);

})();

(function(){

const slider=document.querySelector(".angel2-slider");

if(!slider) return;

const track=slider.querySelector(".angel2-track");
const slides=slider.querySelectorAll(".angel2-slide");
const dotsContainer=slider.querySelector(".angel2-dots");
const next=slider.querySelector(".angel2-right");
const prev=slider.querySelector(".angel2-left");

let index=0;

slides.forEach((_,i)=>{

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>{

index=i;
update();

};

dotsContainer.appendChild(dot);

});

const dots=dotsContainer.querySelectorAll("span");

function update(){

track.style.transform=`translateX(-${index*100}%)`;

dots.forEach(d=>d.classList.remove("active"));

dots[index].classList.add("active");

}

next.onclick=()=>{

index=(index+1)%slides.length;
update();

};

prev.onclick=()=>{

index=(index-1+slides.length)%slides.length;
update();

};

setInterval(()=>{

index=(index+1)%slides.length;

update();

},5000);

})();

(function(){

const slider=document.querySelector(".gallery-slider");

const track=slider.querySelector(".gallery-track");

const items=slider.querySelectorAll(".gallery-item");

const prev=slider.querySelector(".left");

const next=slider.querySelector(".right");

const dotsContainer=document.querySelector(".gallery-dots");

let index=0;

const visible=4;

const maxIndex=items.length-visible;


/* DOTS */

for(let i=0;i<=maxIndex;i++){

const dot=document.createElement("span");

if(i===0) dot.classList.add("active");

dot.onclick=()=>{

index=i;

update();

};

dotsContainer.appendChild(dot);

}

const dots=dotsContainer.querySelectorAll("span");


function update(){

const itemWidth=items[0].offsetWidth+20;

track.style.transform=`translateX(-${index*itemWidth}px)`;

dots.forEach(d=>d.classList.remove("active"));

dots[index].classList.add("active");

}


next.onclick=()=>{

index++;

if(index>maxIndex) index=0;

update();

};

prev.onclick=()=>{

index--;

if(index<0) index=maxIndex;

update();

};


/* AUTO SLIDE */

setInterval(()=>{

index++;

if(index>maxIndex) index=0;

update();

},4000);

})();