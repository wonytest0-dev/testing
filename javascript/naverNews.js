async function loadNaverNews(){

try{

const res = await fetch("https://naver-jimin-api.onrender.com/naver-news");

const data = await res.json();

const container = document.getElementById("jiminNews");

container.innerHTML = "";

data.forEach(news => {

const card = document.createElement("div");
card.className = "news-card";

const title = news.title.replace(/<[^>]*>/g,'');

const image = news.image || "/images/default.jpg";

card.innerHTML = `
<img class="news-img" src="${image}">
<div>
<div class="news-title">
<a href="${news.link}" target="_blank">${title}</a>
</div>
<div class="news-source">${news.pubDate}</div>
</div>
`;

container.appendChild(card);

});

}catch(err){

console.log(err);

}

}

document.addEventListener("DOMContentLoaded",loadNaverNews);
