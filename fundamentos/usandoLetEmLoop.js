for ( let i = 0; i < 10; i++) { // -> nesse caso usando o "let" em vez de "var" o valor da variavel "i" so vai estar disponivel dentro do escopo pois a variavel usando "let" dentro do escopo so vai atribuir dentro do propio escoo diferentemente do "var"
console.log(i);
}
console.log("i = ", i); // -> aqui retornarar um erro por causa de que o "let" so atribui uma variaval dentro do escopo