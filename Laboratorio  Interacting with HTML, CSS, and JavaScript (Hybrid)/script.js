let contador = 0;
const contadorCero = document.getElementById('contador');
const incrementarBoton1 = document.getElementById('incrementar');
const decrementarBoton2 = document.getElementById('decrementar');

function actualizarContador() {
    contadorCero.textContent = contador;
    if (contador >= 10) {
        contadorCero.style.color = 'red';
    } else {
        contadorCero.style.color = 'black';
    }
}

incrementarBoton1.addEventListener('click', function() {
    contador++;
    actualizarContador();
});

decrementarBoton2.addEventListener('click', function() {
    contador--;
    actualizarContador();
});

actualizarContador(); // Inicializar el contador