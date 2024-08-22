function imprimirSoma(a, b) { // -> função sem retorno
    console.log(a + b);
} 

imprimirSoma(2, 3); // -> vai atribuir o 2 para o "a" e o 3 para o "b"
imprimirSoma(2); // -> vai pegar so a priemeira letra a outra está indefinida e o resultado vai dar "NaN"
imprimirSoma(2, 10, 4, 5, 6, 7, 8); /* -> ele vai pegar so os dois primeiros numeros 
pois so foi difinido dois numeros e ignorar o resto */
imprimirSoma(); // -> vai dar "NaN" pois não esta atribuindo valor para que a soma seja feita


function soma(a, b = 1) { // -> função com retorno
    return a + b;
}

console.log(soma(2, 3)); // -> vai atribuir os valores para suas respectivas letras
console.log(soma(2)); // -> ele vai retornar so o valor de "a" pois "b" ja foi definido como "1"
console.log(soma()); // -> vai dar "NaN pois não foi atribuido o valor de "a"

/* obs: pode fazer de qualquer um dos dois jeitos (colocando o "return" dentro da função 
ou o "console.log"), porem nos dois casos tem que declarar o valor nesse caso de "a, b" foram da função */