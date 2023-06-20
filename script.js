function updateLocalTime() {
    document.getElementById('localtime').innerText = new Date().toLocaleString('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
}

setInterval(updateLocalTime, 1000);
updateLocalTime();