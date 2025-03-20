'use strict';


const escrever = () => {
    const inputElemento = document.getElementById('texto');
    const texto = inputElemento.value || inputElemento.placeholder;
    const newEscrita = document.getElementById('resposta');

    newEscrita.innerHTML = texto
}

const resetar = () => {
    const h1 = document.getElementById('resposta')
    const HW = 'Hello World'
    h1.innerHTML = HW
}

document.getElementById('reset')
        .addEventListener('click', resetar);

document.getElementById('texto')
        .addEventListener('input', escrever);

window.onload = escrever;