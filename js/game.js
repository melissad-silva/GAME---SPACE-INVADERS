const nave = document.getElementById('nave');
const timerDisplay = document.getElementById('timer');
let pocicaoX = window.innerWidth / 2 - 60; // Ajustado para centralizar nave 
let jogoPausado = false;
let intervaloTimer;

// Variáveis do Cronômetro
let segundos = 0, minutos = 0, horas = 0;

// TIMER
function iniciarCronometro() {
    segundos++;
    if (segundos === 60) { segundos = 0; minutos++; }
    if (minutos === 60) { minutos = 0; horas++; }

    const h = String(horas).padStart(2, '0');
    const m = String(minutos).padStart(2, '0');
    const s = String(segundos).padStart(2, '0');
    timerDisplay.innerText = `${h}:${m}:${s}`;
}

function alternarPausa() {
    if (!jogoPausado) { //SE NÃO ESTIVER PAUSADO, PAUSA
        clearInterval(intervaloTimer);
        jogoPausado = true;
    } else {
        intervaloTimer = setInterval(iniciarCronometro, 1000);
        jogoPausado = false;
    }
}

// Lógica de Movimentação e Pausa
document.addEventListener('keydown', (event) => {
    // Tecla de Pausa (Funciona mesmo pausado)
    if (event.key.toLowerCase() === 'p') {
        alternarPausa();
        return; 
    }

    // Se estiver pausado, bloqueia o restante das ações
    if (jogoPausado) return;

    // Lógica de Movimentação
    const larguraNave = 120;
    const limiteDireito = window.innerWidth - larguraNave;

    if (event.key === 'ArrowLeft' && pocicaoX > 0) {
        pocicaoX -= 30;
    } else if (event.key === 'ArrowRight' && pocicaoX < limiteDireito) {
        pocicaoX += 30;
    }

    nave.style.left = pocicaoX + 'px';
});

// Inicialização do Cronômetro
intervaloTimer = setInterval(iniciarCronometro, 1000);