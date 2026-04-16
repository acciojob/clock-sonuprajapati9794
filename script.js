function updateTimer() {
    let now = new Date();

    // format manually (DD/MM/YYYY HH:MM:SS)
    let day = String(now.getDate()).padStart(2, '0');
    let month = String(now.getMonth() + 1).padStart(2, '0');
    let year = now.getFullYear();

    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    let formattedTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    document.getElementById("timer").textContent = formattedTime;
}

// update every second
setInterval(updateTimer, 1000);

// initial call
updateTimer();