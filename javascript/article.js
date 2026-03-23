console.log("JS KELOAD");
console.log("ARTICLES JS JALAN");

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

// CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyA_I9cp8-EuWwm8aX8o_J2rAetX4w_IGlc",
  authDomain: "jimination-9d61d.firebaseapp.com",
  projectId: "jimination-9d61d",
  storageBucket: "jimination-9d61d.firebasestorage.app",
  messagingSenderId: "305447127463",
  appId: "1:305447127463:web:8fc56bcdbf8464bb860e82"
};

// INIT
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// MODAL
const modal = document.getElementById("article-modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementById("close-modal");

// LOAD ARTICLES
async function loadArticles() {

  const container = document.getElementById("articles-container");
  if (!container) return;

  container.innerHTML = "";

  const snapshot = await getDocs(collection(db, "articles"));

  snapshot.forEach(doc => {

    const data = doc.data();
    if (data.status !== "approved") return;

    // preview text
    const preview = data.content
      ? data.content.replace(/\[img\].*?\[\/img\]/g, "")
          .split(" ")
          .slice(0, 12)
          .join(" ") + "..."
      : "";

    // ambil gambar pertama
    let firstImage = "";
    const match = (data.content || "").match(/\[img\](.*?)\[\/img\]/);
    if (match && match[1]) {
      firstImage = match[1].trim();
    }

    const card = document.createElement("div");
    card.className = "article-card";

    card.innerHTML = `
      <img src="${firstImage}" class="article-image">

      <div class="article-content">
        <h2>${data.title || "No Title"}</h2>
        <div class="meta">${data.writer || "Anonymous"}</div>
        <p class="desc">${preview}</p>
        <button class="read-btn open-modal">READ MORE</button>
      </div>
    `;

    // 🔥 MODAL FIX (FOTO → TEXT)
    card.querySelector(".open-modal").onclick = () => {

      modal.style.display = "block";

      let html = "";
      const lines = (data.content || "").split("\n");

      let pendingText = "";

      lines.forEach(line => {

        line = line.trim();
        if (!line) return;

        if (!line.includes("[img]")) {
          pendingText = line;
          return;
        }

        const url = line.replace("[img]", "").replace("[/img]", "").trim();

        if (url.startsWith("http")) {
          html += `<img src="${url}" style="width:100%; border-radius:12px; margin:20px 0;">`;
        }

        if (pendingText) {
          html += `<p>${pendingText}</p>`;
          pendingText = "";
        }

      });

      if (pendingText) {
        html += `<p>${pendingText}</p>`;
      }

      modalBody.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.writer || "Anonymous"}</p>
        ${html}
      `;
    };

    container.appendChild(card);

    // SEO (tidak diubah)
    const slug = (data.title || "article")
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .replace(/\s+/g, "-");

    const seoLink = document.createElement("a");
    seoLink.href = `/articles/index.html?slug=${slug}`;
    seoLink.textContent = data.title || "article";
    seoLink.style.display = "none";
    seoLink.setAttribute("title", data.title || "article");

    container.appendChild(seoLink);

  });
}

// CLOSE
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// RUN
loadArticles();
