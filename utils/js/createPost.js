const postModal = document.getElementById("post-modal");
const postBtn = document.getElementById("post-btn");
const crossBtn = document.getElementById("cross-btn");
const postAnotherBtn = document.getElementById("post-another-btn");
const copyPostLinkBtn = document.getElementById("copy-post-link-btn");
const copyText = document.getElementById("copy-input");
const copiedMessage = document.getElementById("copied-message");

////// Modal will be opened when clicked on post btn
postBtn.addEventListener("click", () => {
  postModal.style.opacity = "1.0";
  postModal.style.pointerEvents = "all";
});

//// Modal will be closed when clicked outside content or clicked on cross btn
postModal.addEventListener("click", (e) => {
  if (
    e.target === postModal ||
    e.target === crossBtn ||
    e.target === postAnotherBtn
  ) {
    postModal.style.opacity = "0";
    postModal.style.pointerEvents = "none";
  }
});

//// link inside input element of postModal element will be copied to clipboard
copyPostLinkBtn.addEventListener("click", () => {
  if (copyText.value) {
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    navigator.clipboard.writeText(copyText.value);
    copiedMessage.style.opacity = "1";

    setTimeout(() => {
      copiedMessage.style.opacity = "0";
    }, 1000);
  } else {
    return;
  }
});

//////////// TAG BUTTONS FUNCTIONALITY /////////////////
const tagBtns = document.querySelectorAll(`.tag-btn`);
const tagInputEl = document.getElementById(`tag-input`);

let tags = [];

tagBtns.forEach((btn) => {
  btn.addEventListener(`click`, (e) => {
    tagBtns.forEach((btn) => {
      if (!btn.classList.contains(`bg-[#ECECEC]`)) {
        btn.classList.add(`bg-[#ECECEC]`, `text-[#A6A6A6]`);
      }

      // if (btn.classList.contains(`bg-clr_blue`)) {
      //   btn.classList.remove(`bg-clr_blue`);
      // }
    });

    e.target.classList.add(`bg-clr_blue`, `text-white`);
    e.target.classList.remove(`bg-[#ECECEC]`, `text-[#A6A6A6]`);

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

////////////////////// PREVIEW MODAL /////////////////////////
const previewModal = document.getElementById(`preview-modal`);
const previewBtn = document.getElementById(`preview-btn`);
const previewModalContent = document.getElementById(`preview-content`);
const previewModalTitle = document.getElementById(`preview-title`);
const previewModalTags = document.getElementById(`preview-tags`);
const textAreaField = document.getElementById(`textarea`);
const titleField = document.getElementById(`title-input`);
const previewCloseBtn = document.getElementById(`preview-close-btn`);
const previewCrossBtn = document.getElementById(`preview-cross-btn`);

previewBtn.addEventListener(`click`, () => {
  previewModal.classList.remove(`opacity-0`);
  previewModal.classList.remove(`pointer-events-none`);

  if (textAreaField.value) {
    previewModalContent.textContent = textAreaField.value;
  } else {
    previewModalContent.textContent = `no content yet`;
  }

  if (titleField.value) {
    previewModalTitle.textContent = titleField.value;
  } else {
    previewModalTitle.textContent = `no title yet`;
  }

  if (tagInputEl.value) {
    previewModalTags.textContent = `Tags:` + tagInputEl.value;
  } else {
    previewModalTags.textContent = ``;
  }
});

previewCrossBtn.addEventListener(`click`, closePreviewModal);
previewCloseBtn.addEventListener(`click`, closePreviewModal);

function closePreviewModal() {
  previewModal.classList.add(`opacity-0`);
  previewModal.classList.add(`pointer-events-none`);
}
