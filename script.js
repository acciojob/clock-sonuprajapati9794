let timerDisplay = document.getElementById("timer");

setInterval(function () {
    let currentDate = new Date(); // inside function
    timerDisplay.textContent = currentDate.toLocaleString();
}, 1000);