const listaTeclas = document.querySelectorAll('.tecla');

function tocaSom(idTagAudio) {
    document.querySelector(idTagAudio).play();
}

for (let i = 0; i < listaTeclas.length; i++) {
    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = () => tocaSom(idAudio);

    tecla.onkeydown = (key) => {
        if (key.code === 'Space' || key.code === 'Enter') tecla.classList.add('ativa');
    }

    tecla.onkeyup = (key) => {
        if (key.code === 'Space' || key.code === 'Enter') tecla.classList.remove('ativa');
    }
}
