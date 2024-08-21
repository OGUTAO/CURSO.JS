const valores = [7.7, 8.9, 6.3, 9.2]; /* -> assim que se cria um array */
console.log(valores[0], valores[3]); /* -> pega o primeiro e o ultimo elemento do array */
console.log(valores[4]); /* -> vai ficar indefinido pois não existe o 4 elemento nesse array */

valores[4] = 10; /* -> vai atribuir um 4 elemento ao array */
console.log(valores); 
console.log(valores.length); /* -> vai indicar quantos elementos existem no array */

valores.push({id: 3}, false, null, "teste"); /* -> vai adicionar mais elementos no mesmo array (porem não é o ideal) é melhor criar um array para cada tipo de elemento */
console.log(valores);

console.log(valores.pop()); /* -> vai tirar algum elemento do array (nesse caso o ultimo elemento pois nao foi indicado qual entre os parenteses) */
delete valores[0]; /* -> vai deletar o elemento selecionado do array */
console.log(valores);

console.log(typeof valores); /* -> vai indicar de que tipo o array é lido em javascript nessa caso ele é um (objeto) */


