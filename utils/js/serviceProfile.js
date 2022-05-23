///////////// Modal appears when clicked on submit btn
const submitModal = document.getElementById("submit-btn-modal");
const offerCrossBtn = document.getElementById("offer-cross-btn");
const submitBtn = document.getElementById("submit-btn");
const closeBtn = document.getElementById("close-btn");

submitBtn.addEventListener("click", () => {
  submitModal.style.opacity = "1.0";
  submitModal.style.pointerEvents = "all";
});

submitModal.addEventListener("click", (e) => {
  if (
    e.target === submitModal ||
    e.target === offerCrossBtn ||
    e.target === closeBtn
  ) {
    submitModal.style.opacity = "0";
    submitModal.style.pointerEvents = "none";
  }
});
