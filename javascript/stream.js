// ACCORDION
document.querySelectorAll(".guide-item").forEach(item => {

  const question = item.querySelector(".guide-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });

});

// PLATFORM CLICK
document.querySelectorAll(".platform-btn").forEach(btn => {

  btn.addEventListener("click", () => {

    document.querySelectorAll(".platform-btn")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

  });

});

