const listaTeclas = document.querySelectorAll('.tecla');

function tocaSom(idTagAudio) {
    document.querySelector(idTagAudio).play();
}

let contador = 0;

while (contador < listaTeclas.length) {
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = () => tocaSom(idAudio);
    contador++;
}