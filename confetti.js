// Función para crear confeti
function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#ff00ff', '#39ff14', '#00ffff', '#ff4500', '#ffd700'];

    // Ajusta el número de partículas según el tamaño de la pantalla
    const confettiCount = window.innerWidth < 600 ? 50 : 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiContainer.appendChild(confetti);

        // Remover el confeti después de caer
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

// Ejecuta la función de confeti después de 3 segundos
setTimeout(createConfetti, 3000);

