// Armazenando uma funcao em uma variavel 
const imprimirSoma = function (a, b) { // -> function vai abrir uma função 
    console.log(a + b);
}

imprimirSoma(2, 3);
// Ou pode ser feito assim
const imprimirSoma2 = function (a, b) { 
    return (a + b);
}
console.log(imprimirSoma2(2, 3));



// Armazenando uma funcao arrow em uma variavel 
const soma = (a, b) => { // -> substitui o "function" (é so uma forma mais simples)
    return a + b;
}
console.log(soma(2, 3));



// retorno implicito
const subtracao = (a, b) => a - b; // -> o simbolo "=>" serve apenas se for retornar apenas uma linha de codigo
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a); // -> caso parecido com o de cima mas a letra "a" não precisou ficar entre parenteses pois não foi feita nenhuma conta na mesma linha
imprimir2("legal");