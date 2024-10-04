function updateTime() {
    const clockElement = document.getElementById('live-clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    // const timetext = 'Time: '
    // const formattedTime = `${hours}:${minutes}`;
    clockElement.textContent = formattedTime;
}

// Update the time every second
setInterval(updateTime, 1000);

// Call the function to display the time immediately
updateTime();