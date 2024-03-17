alert('Seja muito bem vindo ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`essa é uma mensagem secreta!, o numero secreto é ${numeroSecreto}`);
let chute;
let tentativas = 1; //ja inicia com o valor de 1, pois foi preciso a pessoa fazer a 1º tentativa.

//Enquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto ){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
        // Se o chute for igual ao numero secreto.
    if (chute == numeroSecreto){
        break;
        
    }
    else{
        if(chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`);
        }
        else{
            alert(`O numero secreto é maior que ${chute}`);
        }
        //tentativas + tentativas + 1; (abaixo está a forma resumida)
        tentativas++; //a atribuição é colocada aqui (no final do else) pois ja passou por todas a linhas(tentativas), e agora será somado quantas vezes o looping rodou até "acertar"; somará os erros e o acerto;
    }
}

//Operador ternario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabens player :), você acertou o numero secreto: ${numeroSecreto}, com ${tentativas} ${palavraTentativa}`);

//^^^^^^^^^^^^
/*if(tentativas > 1){
    alert(`Parabens player :), você acertou o numero secreto: ${numeroSecreto}, com ${tentativas} tentativas`);
} else {
alert(`Parabens player :), você acertou o numero secreto: ${numeroSecreto}, com ${tentativas} tentativa`);
}*/


