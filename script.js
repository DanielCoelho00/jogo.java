<<<<<<< HEAD
var numeroEncontrar = 0;
var tentativas = 0;

function atualizar() {
    numeroEncontrar = parseInt(Math.random() * 100);

    console.log(numeroEncontrar)
}

function verificarNumero() {
    var aposta = document.getElementById('aposta').value;

    if (aposta > 100 || aposta < 0) {
        alert('Aposta Inválida');
    }

    else if (aposta > numeroEncontrar) {
        tentativas++;
        alert('Número Menor');
    }

    else if (aposta < numeroEncontrar) {
        tentativas++;
        alert('Número Maior');
    }

    else {
        alert('PARABÉNS, Você Acertou com ' + tentativas + ' erros');
    }

}

function atualizarJogo() {
    atualizar();

}

atualizar();



=======
var numeroEncontrar = 0;
var tentativas = 0;

function atualizar(){
    numeroEncontrar = parseInt(Math.random() * 100);

console.log(numeroEncontrar)
}

function verificarNumero(){
    var aposta = document.getElementById('aposta').value;

    if(aposta > 100 || aposta < 0){
        alert('Aposta Inválida');
    }

    else if(aposta > numeroEncontrar){
        tentativas++;
        alert('Número Menor');
    }

    else if(aposta < numeroEncontrar){
        tentativas++;
        alert('Número Maior');
    }

    else {
        alert('PARABÉNS, Você Acertou com '+tentativas+' erros');
    }

}

function atualizarJogo(){
    atualizar();
}



>>>>>>> 442c5dfc5ca68a56ce341e9bbcd851defa934eff
