for (var i = 0; i < 10; i++) { // -> isso é um laço dentro do escopo, nele o valor de "i" vai de "0 até 9" pois o "i" é menor que 10 ou seja dentro doe scopo vai imprimir no maximo o valor 9
    console.log(i);
}
console.log("i =", i); // -> como aqui ja esta fora do escopo o valor de "i" vai ser maior do que o ultimo valor dado para "i"" dentro do escopo, e por temos usado a variavel como "var" não tem problema pedir para imprimir fora do escopo foi o "var" mantem o valor dentro ou fora do escopo