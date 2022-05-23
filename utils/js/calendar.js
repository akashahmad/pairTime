// const datePopup = document.getElementById(`date-popup`);
// const dateStartInput = document.getElementById(`date-start-input`);
// const dateEndInput = document.getElementById(`date-end-input`);
// const dateBtn = document.getElementById(`date-btn`);

// console.log(document.querySelectorAll(`.fc-timegrid-event`));

/////////////////////////////////////// EVENT LISTENERS //////////////////////////////////////////
// dateBtn.addEventListener(`click`, addEvent);
document.addEventListener("DOMContentLoaded", calendarLoad);
// datePopup.addEventListener(`click`, (e) => {
//   if (e.target === datePopup) {
//     datePopup.classList.add(`pointer-events-none`, `opacity-0`);
//   }
// });

/////////////////////// VARIABLES DECLARATION ////////////////////////////////////////////
// const calendarEvents = JSON.parse(localStorage.getItem(`calendarEvents`)) || [];
// let startDate = ``;
// let endDate = ``;

//////////////////////////////////// FUNCTIONS ////////////////////////////////////////////////
// function addEvent() {
//   datePopup.classList.add(`pointer-events-none`, `opacity-0`);
//   const newEvent = {
//     id: 1,
//     start: startDate + `T` + dateStartInput.value,
//     end: endDate + `T` + dateEndInput.value,
//   };

//   calendarEvents.push(newEvent);
//   localStorage.setItem(`calendarEvents`, JSON.stringify(calendarEvents));
//   calendarLoad();
// }

let currentDate = new Date().getDate();

const calendarEvents = [
  {
    start: `2022-05-${
      currentDate < 10 ? `0` + currentDate : currentDate
    }T03:30:00`,
    end: `2022-05-${
      currentDate < 10 ? `0` + currentDate : currentDate
    }T04:30:00`,
  },
  {
    start: `2022-05-${
      currentDate + 2 < 10 ? `0` + (currentDate + 2) : currentDate + 2
    }T07:30:00`,
    end: `2022-05-${
      currentDate + 2 < 10 ? `0` + (currentDate + 2) : currentDate + 2
    }T09:15:00`,
  },
  {
    start: `2022-05-${
      currentDate + 1 < 10 ? `0` + (currentDate + 1) : currentDate + 1
    }T11:00:00`,
    end: `2022-05-${
      currentDate + 1 < 10 ? `0` + (currentDate + 1) : currentDate + 1
    }T12:30:00`,
  },
];

function calendarLoad() {
  var calendarEl = document.getElementById("schedular-calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "timeGridWeek",
    selectable: true,
    editable: true,
    droppable: true,
    allDaySlot: false,
    slotLabelFormat: {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      meridiem: false,
    },
    events: calendarEvents,
    eventTimeFormat: {
      hour: "numeric",
      minute: "2-digit",
      // hour12: false,
      meridiem: "long",
    },
    // select: function (info) {
    //   datePopup.classList.remove(`pointer-events-none`, `opacity-0`);
    //   startDate = info.startStr.split(`T`)[0];
    //   endDate = info.startStr.split(`T`)[0];

    //   dateStartInput.value = info.startStr.split(`+`)[0].split(`T`)[1];
    //   dateEndInput.value = info.endStr.split(`+`)[0].split(`T`)[1];
    // },
    // eventDragStart: function (info) {
    //   console.log(info);
    //   console.log(info.view.getCurrentData().currentDate);
    // },
  });

  calendar.render();
}
