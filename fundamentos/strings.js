const escola = "Cod3r"



{
console.log("Exemplo 1:")
console.log(escola.charAt(4)); /* -> ".charAt" imprimi a letra que está no indice solicitado,
neste caso a "letra r" que está no numero "4" da string 
levando em consideração que começa no "0" */
}



{
console.log("Exemplo 2:")
console.log(escola.indexOf('3')); /* -> ".indexOf" faz o mesmo do "charAt" só que ao contrario, 
ele pega a letra ou numero que solicitou e ele diz em qual posição ele está */  
}



{
console.log("Exemplo 3:")
console.log(escola.charCodeAt(3)); /* -> ".charCodeAt" imprimi a letra igual no "charAt" 
porem em numero referente a letra na "tabela unicode ou asc" */
}



{
console.log("Exemplo 4A:")
console.log(escola.substring(1)); // -> ".substring" imprimi a frase apartir do numero que você colocar entre parenteses

console.log("Exemplo 4B:")
console.log(escola.substring(0, 3)); /* -> nesse caso ele vai do indice 0 ate o 3 
da string que você quer que ele analise e imprima porem sem incluir o indice 3 */
}



{
console.log("Exemplo 5A:")
console.log("Escola ".concat(escola).concat("!")); /* -> ".concat" serve para concatenar ou seja adicionar 
frases ou numeros ou simbolos a sua string dependendo de onde você a coloca-las */

console.log("Exemplo 5B:")
console.log("Escola " + escola + ("!")); /* -> mesma coisa que o ".concat" 
obs: so concatena pq é string se fosse número iria somar */
}



{
console.log("Exemplo 6A:")
console.log(escola.replace(3, "e")); /* -> ".replace" vai substituir a letra ou numero no espaço selecionado por você 
como nesse caso que substituiu o numero no indice 3 da string */

console.log("Exemplo 6B:")
console.log(escola.replace(/\d/, "e")); // -> "/\d/" substituição de todos os digitos da string pela letra "e"

console.log("Exemplo 6C:")
console.log(escola.replace(/\w/g, "e")); // -> "/\d/" substituição de todas as letras e digitos da string pela letra "e"
}



{
console.log("Exemplo 7:")
console.log('Ana, Maria, Pedro'.split(",")); /* -> ".split" gera um array (quebra em partes) 
e nesse caso usando uma virgula para separa-los de uma forma melhor */
}