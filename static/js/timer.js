const timerElement = document.getElementById("timer");
const endDate = new Date(timerElement.getAttribute("data-enddate")).getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance < 0) {
        timerElement.innerHTML = "🎉 It's time for your Early Exit!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateTimer();
setInterval(updateTimer, 1000);