// Selecciona el elemento de la cuenta regresiva
const countdownDisplay = document.getElementById('countdown');

// Configura el tiempo de la cuenta regresiva (prueba: 5 segundos)
let countdownTime = 5;

// Función de cuenta regresiva
function startCountdown() {
    const countdownInterval = setInterval(() => {
        countdownDisplay.textContent = countdownTime;
        countdownTime--;

        if (countdownTime < 0) {
            clearInterval(countdownInterval);
            triggerExplosion(); // Llama a la función de explosión
        }
    }, 1000);
}

// Función de explosión
function triggerExplosion() {
    countdownDisplay.textContent = "¡Feliz cumpleaños, Papito lo quiero mucho💞!";
    countdownDisplay.style.animation = "explode 1s forwards"; // Activa la animación

    
    // const explosionSound = new Audio('explosion-sound.mp3');
    // explosionSound.play();
}

// Inicia la cuenta regresiva de prueba
startCountdown();
