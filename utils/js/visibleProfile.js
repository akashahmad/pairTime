////// Visible Profile page functionality of Dashboard
const showAllBtn = document.getElementById("show-all-btn");
const allServicesContainer = document.getElementById("all-services-list");
const circleEl = document.getElementById("big-circle");
const showAllLink = document.getElementById("show-profiles-link");
const serviceEl = document.getElementById("service-number");

showAllBtn.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.textContent.trim() === "Show All") {
    allServicesContainer.style.display = "block";
    showAllBtn.textContent = "Show Less";
    circleEl.style.display = "none";
    showAllLink.style.display = "block";
    serviceEl.style.display = "block";
  } else {
    allServicesContainer.style.display = "none";
    showAllBtn.textContent = "Show All";
    circleEl.style.display = "block";
    showAllLink.style.display = "none";
    serviceEl.style.display = "none";
  }
});
