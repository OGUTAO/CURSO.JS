const peso1 = 1.0;
const peso2 = Number("2.0"); /* dos dois jeitos é a mesma coisa porem sem o "Number" é um número 
e com o "Number" é uma string que detem um numero */

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // -> "isInteger" serve para verificar se o valor é inteiro ou não 

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media);
console.log(media.toFixed(2)); /* -> "toFixed" serve para aproximar o valor sem ficar quebrado
e o numero "2" o máximo de cada decimais que eu quero que ele imprima */
console.log(media.toString(2)); /* -> "toString(2)" serve para caso 
queira transformar um numero em uma string para numero binário 
(ele vai ler o valor e transformar em uma string seja em binario ou nao) */
console.log(typeof media);