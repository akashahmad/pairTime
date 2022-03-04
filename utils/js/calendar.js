document.addEventListener("DOMContentLoaded", function () {
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
    // expandRows: true,
    // height: "100%",
  });
  calendar.render();
});
