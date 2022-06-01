//////// modal functionality
const archiveMeetingModal = document.getElementById("archive-meeting-modal");
const crossBtn = document.getElementById("cross-btn");
const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const archiveBtn = document.getElementById("archive-meeting-btn");
const archiveMessageEl = document.getElementById("archive-message-el");

////// Modal will be opened when clicked on cancel btn
archiveBtn.addEventListener("click", () => {
  archiveMeetingModal.style.opacity = "1.0";
  archiveMeetingModal.style.pointerEvents = "all";
});

////// Modal will be closed when clicked on cross btn / noBtn / clicked outside
archiveMeetingModal.addEventListener("click", (e) => {
  if (
    e.target === archiveMeetingModal ||
    e.target === crossBtn ||
    e.target === noBtn
  ) {
    archiveMeetingModal.style.opacity = "0";
    archiveMeetingModal.style.pointerEvents = "none";

    if (yesBtn.textContent === "Ok") {
      setTimeout(changeYesBtnContent, 1000);
    }
  }
});

yesBtn.addEventListener("click", () => {
  if (yesBtn.textContent.trim() === "Yes") {
    yesBtn.textContent = "Ok";
    yesBtn.style.width = "100%";
    noBtn.style.display = "none";
    archiveMessageEl.textContent = "The meeting has been archived";
  } else {
    archiveMeetingModal.style.opacity = "0";
    archiveMeetingModal.style.pointerEvents = "none";

    setTimeout(changeYesBtnContent, 1000);
  }
});

function changeYesBtnContent() {
  yesBtn.textContent = "Yes";
  yesBtn.style.width = "50%";
  noBtn.style.display = "block";
  archiveMessageEl.textContent =
    "Are you sure you want to archive this meeting?";
}

////////////////// Multiline Mode Functionality ////////////////////
const multilineCheckBox = document.getElementById(`multiline-checkbox`);
const chatInputEl = document.getElementById(`input-chat`);
const textareaEl = document.getElementById(`textarea-chat`);

multilineCheckBox.addEventListener(`change`, () => {
  if (multilineCheckBox.checked) {
    chatInputEl.classList.add(`hidden`);
    textareaEl.classList.remove(`hidden`);
  } else {
    chatInputEl.classList.remove(`hidden`);
    textareaEl.classList.add(`hidden`);
  }
});
