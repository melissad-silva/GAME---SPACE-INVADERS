const nave = document.getElementById('nave');
let pocicaoX = window.innerWidth / 2; // Posição inicial centralizada (innerwidth = limite da tela do user)

document.addEventListener('keydown', (event) => {
    // verifica a movimentacao
    if (event.key === 'ArrowLeft' && pocicaoX > 0) {
        pocicaoX = pocicaoX - 30;
    } else if (event.key === 'ArrowRight' && pocicaoX < window.innerWidth) {
        pocicaoX = pocicaoX + 30;
    }
    
    // Atualização do DOM 
    nave.style.left = pocicaoX + 'px';
});