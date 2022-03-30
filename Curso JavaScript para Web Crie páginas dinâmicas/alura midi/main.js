const listaTeclas = document.querySelectorAll('.tecla');

function tocaSom(idTagAudio) {
    document.querySelector(idTagAudio).play();
}

for (tecla of listaTeclas) {
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = () => tocaSom(idAudio);
}
