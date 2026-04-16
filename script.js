function updateTimer() {
    let now = new Date(); // current date & time

    // format date
    let date = now.toLocaleDateString();

    // format time
    let time = now.toLocaleTimeString();

    // show in p tag
    document.getElementById("timer").textContent = date + " " + time;
}

// run every second
setInterval(updateTimer, 1000);

// call once immediately (important)
updateTimer();
