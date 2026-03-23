import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const loginBtn = document.getElementById("login-btn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const registerLink = document.getElementById("register-link");

/* LOGIN */
if (loginBtn) {
  loginBtn.addEventListener("click", async () => {

    if (!email.value || !password.value) {
      alert("Isi email dan password!");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);

      alert("Login success 🔥");

      // 🔥 langsung ke halaman artikel
      window.location.href = "/navigation/community/articles.html";

    } catch (error) {
      alert(error.message);
    }

  });
}

/* REGISTER */
if (registerLink) {
  registerLink.addEventListener("click", async () => {

    if (!email.value || !password.value) {
      alert("Isi email dan password dulu!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);

      alert("Account created 🎉");

      // 🔥 langsung login + redirect
      window.location.href = "/navigation/community/articles.html";

    } catch (error) {
      alert(error.message);
    }

  });
}