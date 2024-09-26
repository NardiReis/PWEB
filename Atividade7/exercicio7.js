
var pc;

function EscolhaPC1(){

    var NumPC = Math.random();
    if (NumPC < 0.33) return 'Pedra';
    else if (NumPC < 0.66) return 'Tesoura';
    else return 'Papel';

}

function Vencedor(user, pc){
    if(user === pc) return 'empate';
    else if(user === 'Pedra' && pc === 'Tesoura')
    return 'Pedra quebra Tesoura! Você venceu'
    else if(user === 'Tesoura' && pc === 'Pedra')
    return 'Pedra quebra Tesoura! Você perdeu'

    else if(user === 'Tesoura' && pc === 'Papel')
    return 'Tesoura corta Papel! Você venceu'
    else if(user === 'Papel' && pc === 'Tesoura')
    return 'Tesoura corta Papel! Você perdeu'

    else if(user === 'Papel' && pc === 'Pedra')
    return 'Papel cobre a Pedra! Você venceu'
    else (user === 'Pedra' && pc === 'Papel')
    return 'Papel cobre a Pedra! Você perdeu'

}


function jogar(EscolhaUser){

   let EscolhaPC;
   EscolhaPC = EscolhaPC1();
   let Resultado = Vencedor(EscolhaUser, EscolhaPC);

   alert(Resultado);


}