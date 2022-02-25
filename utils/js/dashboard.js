const dashboardNavOpenBtn = document.getElementById("dashb-nav-openBtn");
const dashboardNavCloseBtn = document.getElementById("dashb-nav-closeBtn");
const sidebar = document.getElementById("sidebar");

dashboardNavOpenBtn.addEventListener("click", (e) => {
  sidebar.style.left = "0";
});

dashboardNavCloseBtn.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});

/////// Modal Working
const modalEl = document.getElementById("modal");
const previewBtn = document.getElementById("preview-btn");
const closeBtn = document.getElementById("close-btn");
const crossBtn = document.getElementById("cross-btn");

closeBtn.addEventListener("click", closeModal);
crossBtn.addEventListener("click", closeModal);

previewBtn.addEventListener("click", () => {
  modalEl.style.transform = "scale(1.0)";
  previewBtn.style.backgroundColor = "#250CED";
  previewBtn.style.color = "#fff";
});

function closeModal() {
  modalEl.style.transform = "scale(0)";
  previewBtn.style.backgroundColor = "transparent";
  previewBtn.style.color = "#250CED";
}


