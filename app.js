alert('Boas - vindas ao jogo do numero secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 a 30');

//se chute for igual ao numero secreto [] {} ()
if (chute == numeroSecreto){
    alert(`Voce acertou o numero secreto ${numeroSecreto}`);
 
// se chute diferente ao numero secreto 
} else{
    alert(`Você errou !! O número é ${numeroSecreto}`);
}