// Create the array with the text you want to write
var txt2write = new Array(
  "An innovative <span>marketplace</span> for pair",
  "problem-solving. Get unstuck, or",
  "monetize your knowledge by helping",
  "others."
);

// Variables
var speed = 60; // You can set the speed here. + is slower
var index = 0;
text_pos = 0;
var str_length = txt2write[0].length;
var contents, row;

// Function
function type_text() {
  // Init the content with blank
  contents = "";
  row = Math.max(0, index - 9);
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
      setTimeout("type_text()", 800);
    }
  } else {
    setTimeout("type_text()", speed);
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
    if (window.innerWidth < 640) {
      carouselContainer.style.transform = `translateX(calc(-37rem * ${currentIndex}))`;
    } else {
      carouselContainer.style.transform = `translateX(calc(-${carouselWidth}px * ${currentIndex}))`;
    }
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
});

navCloseBtn.addEventListener("click", () => {
  const navbarWidth = navbarEl.offsetWidth;
  navbarEl.style.transform = `translateX(-${navbarWidth}px)`;
});
