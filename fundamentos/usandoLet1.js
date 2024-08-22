//obs: as variaveis "let" tem escopos globais de função e de blocos ou seja tem uma a mais que a de "var" que seria a de blocos que a "var" não tem
var numero = 1;
{
    let numero = 2 // -> usando "let" não tem problema usar o mesmo nome de variavel mesmo não tendo função pois o "let" vai respeitar somente o número que tiver no mesmo escopo (chaves) ou seja o escopo importa diferente do caso do "var" se a função não estiver declarada pq se tiver declarada ai vai ser igual (vai respeitar o escopo)
    console.log("dentroA =", numero);
}
console.log("foraA =", numero); // -> e o "var" vai ler o ultimo valor disponivel para ele nesse caso como so teve o numero "1" então o valor dele vai ser 1

var numero = 1;
{
    let numero1 = 2 // -> nesse caso usando "let" por conta da variavel ser diferente na hora de retornar o valor ele vai retornar o valor que está fora do escopo pois dentro do escopo ele não tem uma variavel igual para que ele pudesse ser substituido (pois a de fora é "numero" e a de dentro é "numero1")
    console.log("dentroB =", numero);
}
console.log("foraB =", numero); 
