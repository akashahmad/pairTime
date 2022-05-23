const showMoreBtns = document.querySelectorAll(".show-more-btn");

showMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent.trim() === "Show More") {
      btn.previousElementSibling.style.display = "block";
      btn.textContent = "Show Less";
    } else {
      btn.previousElementSibling.style.display = "none";
      btn.textContent = "Show More";
    }
  });
});
