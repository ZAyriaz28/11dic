// Cuenta regresiva al cumpleaños
const countdownElement = document.getElementById("countdown");

function countdown() {
    const eventDate = new Date("December 11, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        clearInterval(countdownTimer);
        countdownElement.innerHTML = "¡Es su cumpleaños!";
    }
}

// Función para iniciar la música en caso de bloqueo por el navegador
function startMusic() {
    const music = document.getElementById("background-music");
    music.play().catch(() => {
        // Si no se puede reproducir, muestra el botón de inicio de música
        document.getElementById("play-music").style.display = "block";
    });
}

// Intentar reproducir la música automáticamente al cargar la página
window.addEventListener("load", () => {
    startMusic();
});

// Configuración de la cuenta regresiva y otras funciones
// (Aquí sigue tu código para la cuenta regresiva, confeti, animación de fotos, etc.)


const countdownTimer = setInterval(countdown, 1000);

// Música de fondo
const music = document.getElementById("background-music");
const toggleButton = document.getElementById("toggle-music");

toggleButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        toggleButton.innerText = "Pausar Música";
    } else {
        music.pause();
        toggleButton.innerText = "Reanudar Música";
    }
});
