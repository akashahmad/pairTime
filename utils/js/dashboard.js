const dashboardNavOpenBtn = document.getElementById("dashb-nav-openBtn");
const dashboardNavCloseBtn = document.getElementById("dashb-nav-closeBtn");
const sidebar = document.getElementById("sidebar");

dashboardNavOpenBtn.addEventListener("click", (e) => {
  sidebar.style.left = "0";
});

dashboardNavCloseBtn.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});
