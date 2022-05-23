//////// modal functionality
const closePostModal = document.getElementById("close-post-modal");
const crossBtn = document.getElementById("cross-btn");
const noBtn = document.getElementById("no-btn");
const closePostBtn = document.getElementById("close-post-btn");

////// Modal will be opened when clicked on cancel btn
closePostBtn.addEventListener("click", () => {
  closePostModal.style.opacity = "1.0";
  closePostModal.style.pointerEvents = "all";
});

////// Modal will be closed when clicked on cross btn / noBtn / clicked outside
closePostModal.addEventListener("click", (e) => {
  if (
    e.target === closePostModal ||
    e.target === crossBtn ||
    e.target === noBtn
  ) {
    closePostModal.style.opacity = "0";
    closePostModal.style.pointerEvents = "none";
  }
});
