import { db, auth } from "./firebase.js";


import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";


import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";


/* 🔐 CHECK LOGIN */
onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("You must login first!");
    window.location.href = "/components/login.html";
  }
});


/* 📤 SUBMIT */
const submitBtn = document.getElementById("submit-btn");


/* 🔥 FIX CENTER BUTTON (INI DOANG TAMBAHAN) */
if (submitBtn) {
  submitBtn.style.display = "block";
  submitBtn.style.margin = "20px auto";
  submitBtn.style.width = "fit-content";
}


if (submitBtn) {
  submitBtn.addEventListener("click", async () => {


    console.log("CLICK KEDETEK");


    const titleEl = document.getElementById("title");
    const writerEl = document.getElementById("writer");


    const title = titleEl ? titleEl.value : "";
    const writer = writerEl ? writerEl.value : "";


    let content = "";


    // 🔥 ambil semua block (pairing aman)
    const blocks = document.querySelectorAll(".block");


    if (blocks.length > 0) {


      blocks.forEach((block) => {


        const imgInput = block.querySelector(".image-field");
        const textInput = block.querySelector(".content-field");


        const paragraph = textInput ? textInput.value.trim() : "";
        const img = imgInput ? imgInput.value.trim() : "";


        if (paragraph) {
          content += paragraph + "\n";
        }


        if (img && img.startsWith("http")) {
          content += "[img]" + img + "[/img]\n";
        }


      });


    } else {


      const oldContentEl = document.getElementById("content");


      if (oldContentEl) {
        content = oldContentEl.value.split("\r\n").join("\n");
      }
    }


    // 🔥 VALIDASI
    if (!title.trim() || !content.trim()) {
      alert("Please fill all fields!");
      return;
    }


    try {


      await addDoc(collection(db, "articles"), {
        title: title,
        writer: writer || "Anonymous",
        image: "",
        content: content,
        status: "pending",
        createdAt: serverTimestamp()
      });


      alert("Article submitted! Waiting for admin approval 🖤");


      if (titleEl) titleEl.value = "";
      if (writerEl) writerEl.value = "";


      // 🔥 reset semua block
      document.querySelectorAll(".content-field").forEach(el => el.value = "");
      document.querySelectorAll(".image-field").forEach(el => el.value = "");


      window.location.href = "/navigation/community/articles.html";


    } catch (err) {
      alert(err.message);
    }


  });
}

