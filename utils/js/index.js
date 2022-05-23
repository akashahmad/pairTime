// Create the array with the text you want to write
let txt2write = new Array(
  "An innovative <span>marketplace</span> for pair",
  "problem-solving. Get unstuck, or",
  "monetize your knowledge by helping",
  "others."
);

// Variables
let speed = 20; // You can set the speed here. + is slower
let index = 0;
let text_pos = 0;
let str_length = txt2write[0].length;

// Function
function type_text() {
  // Init the content with blank
  let contents = "";
  let row = Math.max(0, index - 9);
  while (row < index) {
    // Each sentence will end with a <br />
    contents += txt2write[row++] + "\r<br />";
  }

  // Write the text
  $("div.writeit").html(
    contents +
      txt2write[index].substring(0, text_pos) +
      "<span class='after'>_</span>"
  );

  if (text_pos++ == str_length) {
    text_pos = 0;
    index++;
    if (index != txt2write.length) {
      str_length = txt2write[index].length;
      setTimeout(type_text, 800);
    }
  } else {
    setTimeout(type_text, speed);
  }
}

type_text();

///// Testimonial Carousel functionality
const carouselBtn = document.getElementById("carousel-btn");
const clientCard = document.getElementsByClassName("client-card");
const carouselContainer = document.getElementById("carousel-container");
let currentIndex = 0;

carouselBtn.addEventListener("click", slide);

function slide() {
  currentIndex++;
  const carouselWidth = carouselContainer.offsetWidth;

  if (currentIndex < clientCard.length) {
    carouselContainer.style.transform = `translateX(calc(-${carouselWidth}px * ${currentIndex}))`;
  } else {
    carouselContainer.style.transform = `translateX(0)`;
    currentIndex = 0;
  }
}

///////////// Nvigation small screen animation functionality
const navOpenBtn = document.getElementById("nav-open-btn");
const navCloseBtn = document.getElementById("nav-close-btn");
const navbarEl = document.getElementById("nav-small-screen");

navOpenBtn.addEventListener("click", () => {
  navbarEl.style.transform = "translateX(0)";
  document.body.style.overflow = "hidden";
});

navCloseBtn.addEventListener("click", () => {
  const navbarWidth = navbarEl.offsetWidth;
  navbarEl.style.transform = `translateX(-${navbarWidth}px)`;
  document.body.style.overflow = "auto";
});

////// build section button animations
const presentBtn = document.getElementById("present-btn");
const callBtn = document.getElementById("call-btn");

presentBtn.addEventListener("mouseover", btnAnimate);
callBtn.addEventListener("mouseover", btnAnimate);

function btnAnimate(e) {
  if (window.innerWidth >= 768) {
    e.target.dataset.aos = "";
  }
}

/* ////////////////////////////////// Login Form and Forget Password Form Functionality ////////////////////////*/
const loginModal = document.getElementById("login-modal");
const loginModalHeading = document.getElementById("login-modal-heading");
const loginModalForm = document.getElementById("login-form");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirm-password");
const loginModalBtn = document.getElementById("login-modal-btn");
const loginHomeBtn = document.getElementById("login-home-btn");
const loginFormBtn = document.getElementById("login-form-btn");
// const showBtnPassword = document.getElementById("show-btn-password");
// const showBtnConfirmPassword = document.getElementById(
//   "show-btn-confirm-password"
// );
const showBtn = document.querySelectorAll(`.show-btn`);
const registerNowLink = document.getElementById("register-now");
const forgetPasswordLink = document.getElementById("forget-password");
const loginContainer = document.getElementById(`login-container`);

/////////// Event Liseners
loginHomeBtn.addEventListener("click", showForm);
loginFormBtn.addEventListener("click", showForm);

function showForm() {
  loginModal.style.opacity = `1`;
  loginModal.style.pointerEvents = "all";
}

loginModal.addEventListener(`click`, (e) => {
  if (e.target === loginModal) {
    loginModal.style.opacity = `0`;
    loginModal.style.pointerEvents = `none`;
  }

  if (e.target.textContent.trim() === `Show?`) {
    e.target.textContent = `Hide`;
    e.target.previousElementSibling.type = `text`;
  } else if (e.target.textContent.trim() === `Hide`) {
    e.target.textContent = `Show?`;
    e.target.previousElementSibling.type = `password`;
  }
});

forgetPasswordLink.addEventListener("click", () => {
  if (loginModalBtn.textContent.trim() === "Login") {
    loginModalBtn.textContent = "Update Password";
    forgetPasswordLink.style.display = "none";
    confirmPasswordEl.style.display = "block";
    emailEl.style.display = "none";
    loginModalHeading.textContent = "Forget Password";
  }
});
