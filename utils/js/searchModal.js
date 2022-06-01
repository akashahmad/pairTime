/////// Modal Appears when clicked on preview btn
const previewModalEl = document.getElementById("preview-modal");
const previewBtn = document.getElementById("preview-btn");
const cancelBtn = document.getElementById("cancel-btn");
const submitBtn = document.getElementById("submit-btn");
// const previewCrossBtn = document.getElementById("preview-cross-btn");
const showPreviewText = document.querySelector("#show-preview-text");
const stars = document.querySelectorAll(`.star`);

cancelBtn.addEventListener("click", closeModal);
submitBtn.addEventListener("click", closeModal);
// previewCrossBtn.addEventListener("click", closeModal);

previewBtn.addEventListener("click", () => {
  previewModalEl.style.opacity = "1.0";
  previewModalEl.style.pointerEvents = "all";
  if (window.innerWidth > 700) {
    previewBtn.style.backgroundColor = "#250CED";
    previewBtn.style.color = "#fff";
  }
  showPreviewText.style.display = "inline";
});

stars.forEach((star) => {
  star.addEventListener(`click`, (e) => {
    const newSrc = e.target.src.split("/");

    if (newSrc[newSrc.length - 1] === `star-gray.svg`) {
      e.target.src = `./utils/images/star-yellow.svg`;
    } else {
      e.target.src = `./utils/images/star-gray.svg`;
    }
  });
});

function closeModal() {
  previewModalEl.style.opacity = "0";
  previewModalEl.style.pointerEvents = "none";
  previewBtn.style.backgroundColor = "transparent";
  previewBtn.style.color = "#250CED";
  showPreviewText.style.display = "none";
}

//////////// TAG BUTTONS FUNCTIONALITY /////////////////
const tagBtns = document.querySelectorAll(`.tag-btn`);
const tagInputEl = document.getElementById(`tag-input`);

let tags = [];

tagBtns.forEach((btn) => {
  btn.addEventListener(`click`, (e) => {
    tagBtns.forEach((btn) => {
      if (!btn.classList.contains(`bg-[#250ced10]`)) {
        btn.classList.add(`bg-[#250ced10]`);
      }

      if (btn.classList.contains(`bg-[#250ced40]`)) {
        btn.classList.remove(`bg-[#250ced40]`);
      }
    });

    e.target.classList.add(`bg-[#250ced40]`);
    e.target.classList.remove(`bg-[#250ced10]`);

    /////// pushing the elements to tags array and then display it on input field
    tags.push(` ` + e.target.textContent.trim());

    if (!tags[0]) {
      tags.splice(0, 1).toString();
      tagInputEl.value = tags.toString();
    } else {
      tagInputEl.value = tags.toString();
    }
  });
});

////////// Following operation empties tags array when we manually remove tags from input field
tagInputEl.addEventListener(`change`, () => {
  tags.length = 0;
  tags.push(tagInputEl.value);
});
