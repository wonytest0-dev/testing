import { auth } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

/* 🔥 ADMIN EMAIL */
const ADMIN_EMAIL = "wonytul@gmail.com".toLowerCase();

/* ambil element TANPA hapus struktur */
const loginBtn = document.querySelector(".login-btn");
const box = document.querySelector(".floating-auth");

onAuthStateChanged(auth, (user) => {

  if (!box || !loginBtn) return;

  if (user) {

    const email = user.email.toLowerCase();

    // ubah jadi logout
    loginBtn.textContent = "LOGOUT";
    loginBtn.href = "#";

    // 🔥 HAPUS upload lama kalau ada
    const oldUpload = document.querySelector(".upload-btn");
    if (oldUpload) oldUpload.remove();

    const oldAdmin = document.querySelector(".admin-btn");
    if (oldAdmin) oldAdmin.remove();

    // 🔥 CEK ROLE
    if (email === ADMIN_EMAIL) {

      // ADMIN BUTTON
      const admin = document.createElement("a");
      admin.href = "/components/admin.html";
      admin.className = "login-btn admin-btn";
      admin.textContent = "ADMIN";

      box.appendChild(admin);

    } else {

      // MEMBER BUTTON
      const upload = document.createElement("a");
      upload.href = "/components/upload.html";
      upload.className = "login-btn upload-btn";
      upload.textContent = "UPLOAD";

      box.appendChild(upload);

    }

    // logout function
    loginBtn.onclick = async (e) => {
      e.preventDefault();
      await signOut(auth);
      location.reload();
    };

  } else {

    loginBtn.textContent = "LOGIN";
    loginBtn.href = "/components/login.html";

    // bersihin semua tombol tambahan
    const upload = document.querySelector(".upload-btn");
    if (upload) upload.remove();

    const admin = document.querySelector(".admin-btn");
    if (admin) admin.remove();

  }

});