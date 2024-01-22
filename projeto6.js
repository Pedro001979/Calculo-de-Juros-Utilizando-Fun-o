function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor,juros){
    return (valor + (valor * (juros / 100)))
}

const precoEtiqueta = 100;
const pagamento = 4;

if ( pagamento === 1 ){
    console.log(aplicarDesconto(precoEtiqueta, 10));
}else if ( pagamento === 2 ){
    console.log(aplicarDesconto(precoEtiqueta, 15));
}else if ( pagamento === 3 ){
    console.log( precoEtiqueta);
}else{
    console.log(aplicarJuros (precoEtiqueta, 10));
}

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
       Possiveis Alterações!!!!!

console.log('Digite a forma de Pagamento desejado:');
console.log('1. Débito');
console.log('2. PIX');
console.log('3. Crédito em Até Duas Vezes');
console.log('4. Crédito Acima de Duas Vezes');

const entradaPagamento = require('prompt-sync') ({sigint: true});
let pagamento;
pagamento = entradaPagamento ("Digite: ");
*/
