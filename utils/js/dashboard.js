const dashboardNavOpenBtn = document.getElementById("dashb-nav-openBtn");
const dashboardNavCloseBtn = document.getElementById("dashb-nav-closeBtn");
const sidebar = document.getElementById("sidebar");

console.log(dashboardNavOpenBtn);
console.log(dashboardNavCloseBtn);
console.log(sidebar);

dashboardNavOpenBtn.addEventListener("click", (e) => {
  console.log(e.target);
  sidebar.style.left = "0";
});

dashboardNavCloseBtn.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});
