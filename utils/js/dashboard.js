const dashboardNavOpenBtn = document.getElementById("dashb-nav-openBtn");
const dashboardNavCloseBtn = document.getElementById("dashb-nav-closeBtn");
const sidebar = document.getElementById("sidebar");

dashboardNavOpenBtn.addEventListener("click", (e) => {
  sidebar.style.left = "0";
});

dashboardNavCloseBtn.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});

////// Show All page functionality of Dashboard
const showAllBtn = document.getElementById("show-all-btn");
const allServicesContainer = document.getElementById("all-services-list");
const circleEl = document.getElementById("big-circle");
const showAllLink = document.getElementById("show-profiles-link");

showAllBtn.addEventListener("click", (e) => {
  if (e.target.textContent === "Show All") {
    allServicesContainer.style.display = "block";
    showAllBtn.textContent = "Show Less";
    circleEl.style.display = "none";
    showAllLink.style.display = "block";
  } else if (e.target.textContent === "Show Less") {
    allServicesContainer.style.display = "none";
    showAllBtn.textContent = "Show All";
    circleEl.style.display = "block";
    showAllLink.style.display = "none";
  }
});
