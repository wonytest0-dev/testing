import { db, auth } from "./firebase.js";

import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

/* 🔐 ADMIN EMAIL */
const ADMIN_EMAIL = "wonytul@gmail.com";

/* 🔍 CHECK ADMIN */
onAuthStateChanged(auth, (user) => {

  if (!user) {
    alert("Login dulu!");
    window.location.href = "/components/login.html";
    return;
  }

  if (user.email !== ADMIN_EMAIL) {
    alert("Kamu bukan admin!");
    window.location.href = "/";
    return;
  }

  loadArticles();

});

/* 📥 LOAD DATA */
async function loadArticles() {

  const container = document.getElementById("admin-list");

  if (!container) return; // 🔥 biar gak error

  container.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "articles"));

  querySnapshot.forEach(docSnap => {

    const data = docSnap.data();

    // 🔥 TAMPILKAN HANYA PENDING
    if (data.status !== "pending") return;

    const card = document.createElement("div");
    card.className = "admin-card";

    card.innerHTML = `
      ${data.image ? `<img src="${data.image}"> `: ""}

      <h3>${data.title || "No Title"}</h3>
      <p>${data.writer || "Anonymous"}</p>
      <p>Status: ${data.status}</p>

      <div class="admin-actions">
        <button class="approve">APPROVE</button>
        <button class="delete">DELETE</button>
      </div>
    `;

    /* ✅ APPROVE */
    card.querySelector(".approve").onclick = async () => {

      await updateDoc(doc(db, "articles", docSnap.id), {
        status: "approved"
      });

      alert("Approved 🔥");

      loadArticles(); // refresh

    };

    /* ❌ DELETE */
    card.querySelector(".delete").onclick = async () => {

      await deleteDoc(doc(db, "articles", docSnap.id));

      alert("Deleted ❌");

      loadArticles();

    };

    container.appendChild(card);

  });

}