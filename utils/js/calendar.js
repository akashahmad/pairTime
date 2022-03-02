document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("schedular-calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "timeGridWeek",
    selectable: true,
  });
  calendar.render();
});
