let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let para = document.getElementById("para");
let intervalId;
let hours = 0;
let minutes = 0;
let seconds = 0;

start.addEventListener("click", function() {
  if (!intervalId) { // Check if interval is not already running
    intervalId = setInterval(function() {
      seconds += 1;
      if (seconds === 60) {
        seconds = 0;
        minutes = padNumber(parseInt(minutes) + 1);
      }
      if (minutes === 60) {
        minutes = 0;
        hours = padNumber(parseInt(hours) + 1);
      }
      let time = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;

      para.style.display = "none";
      para.style.display = "block";
      para.innerHTML = time;
    }, 1000); // Interval set to 1000 milliseconds (1 second)
  }
});

stop.addEventListener("click", function() {
  clearInterval(intervalId);
  intervalId = null; // Reset intervalId to allow starting a new interval
});

reset.addEventListener("click", function() {
  clearInterval(intervalId);
  intervalId = null; // Reset intervalId to allow starting a new interval
  hours = 0;
  minutes = 0;
  seconds = 0;
  para.innerHTML = "00:00:00";
});

// Helper function to pad single-digit numbers with leading zeros
function padNumber(number) {
  return number.toString().padStart(2, '0');
}
