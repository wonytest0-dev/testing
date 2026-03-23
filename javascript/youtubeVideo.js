async function loadLatestVideo(){

try{

const API_KEY = "AIzaSyC_UMdX8GXMFtNdzTFEyeRSoBpihnJRrEk";

/* CACHE 1 JAM */

const cached = localStorage.getItem("jiminLatestVideo");
const cacheTime = localStorage.getItem("jiminLatestVideoTime");

if(cached && cacheTime){

const now = Date.now();
const oneHour = 60 * 60 * 1000;

if(now - cacheTime < oneHour){

document.getElementById("latestVideo").innerHTML = cached;
return;

}

}

const channels = [
"UCE6l2NHQkpgF_P96isfOu4Q",
"UCLkAepWjdylmXSltofFvsYQ",
"UC3IZKseVpdzPSBaWxBxundA"
];

let videos = [];

for(const channelId of channels){

let nextPageToken = "";
let scanned = 0;

while(scanned < 500){

const url =
`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&type=video&maxResults=50&pageToken=${nextPageToken}&key=${API_KEY}`;

const res = await fetch(url);
const data = await res.json();

if(!data.items) break;

for(const item of data.items){

const title = item.snippet.title.toLowerCase();
const desc = item.snippet.description.toLowerCase();

if(
title.includes("jimin") ||
title.includes("지민") ||
title.includes("park jimin") ||
title.includes("박지민") ||
title.includes("#jimin") ||
title.includes("#지민") ||
desc.includes("#jimin") ||
desc.includes("#지민")
){

videos.push(item);

}

}

scanned += 50;

if(!data.nextPageToken) break;

nextPageToken = data.nextPageToken;

}

}

/* jika tidak ada video */

if(videos.length === 0){
return;
}

/* ambil yang paling baru */

videos.sort((a,b)=>{
return new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt);
});

const latest = videos[0];

const videoId = latest.id.videoId;
const title = latest.snippet.title;
const thumbnail = latest.snippet.thumbnails.high.url;
const date = new Date(latest.snippet.publishedAt).toLocaleDateString();

/* VIEW COUNT */

const statsUrl =
`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`;

const statsRes = await fetch(statsUrl);
const statsData = await statsRes.json();

const views = Number(statsData.items[0].statistics.viewCount).toLocaleString();

const html =` 
<a href="https://youtube.com/watch?v=${videoId}" target="_blank" class="video-card">

<img src="${thumbnail}" class="video-thumb">

<div class="video-info">
<div class="video-title">${title}</div>
<div class="video-meta">👁 ${views} views • ${date}</div>
</div>

</a>
`;

const container = document.getElementById("latestVideo");

container.innerHTML = html;

/* SIMPAN CACHE */

localStorage.setItem("jiminLatestVideo",html);
localStorage.setItem("jiminLatestVideoTime",Date.now());

}catch(err){

console.log("YouTube error:",err);

}

}

document.addEventListener("DOMContentLoaded",loadLatestVideo);