function TrocarImagem(anything) {
    document.querySelector('.imagem-principal').src = anything;
}

function TrocarCorCírculo(color){
    const extras = document.querySelector('.extras')
    extras.style.background = color;
}