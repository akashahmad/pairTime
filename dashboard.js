const dashboardOpenBtn = document.getElementById("dashb-nav-openBtn");
const dashboardCloseBtn = document.getElementById("dashb-nav-closeBtn");
const sidebar = document.getElementById("sidebar");

dashboardOpenBtn.addEventListener("click", () => {
  sidebar.style.left = "0";
});

dashboardCloseBtn.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});
