const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!";

/* "template" serve para que voce consiga escrever uma frase/string 
com quebra de linha do jeito que quiser sem da erro no codigo e tem que usar " `` " ate o final da string */
const template = ` 
Olá
${nome}!`; 
// "${}" serve para colocar a variavel ou conta matemática que vc quiser dentro do template

console.log(concatenacao, template);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`); // -> "${}" vai considerar a soma somente de dentro das chaves o resto vira string comentada

const up = texto => texto.toUpperCase(); // -> .toUpperCase() vai trasformar a palavra/string em maiuscula
console.log(`Ei... ${up("cuidado")}!`);

const down = texto => texto.toLowerCase(); // -> .toLowerCase() vai trasformar a palavra/string em minuscula
console.log(`Ei... ${down("CUIDADO")}!`);