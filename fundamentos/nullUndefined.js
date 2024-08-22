let valor // não inicializada ou seja indefinida
console.log(valor);

valor = null; // ausencia de valor ou seja null
console.log(valor);
/* console.log(valor.toString()); -> "".toString" vai ler o valor e transformalo em string, 
caso coloque o "2" entre parenteses vai trasnformar em uma string em binario 
porem como nesse caso a variavel está ""null" vai retornar um erro */

const produto = {}
console.log(produto.preco); /* -> neste caso o produto está definido e inicializado como objeto pelo "{}"
porem o "preco" não, por esse motivo o resultado saira como undefined */
console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined /* -> evite atribuir undefined deixa que a linguagem defina, 
anuncer que voce queria zerar uma variavel ou deixa-la indefinida */
console.log(!!produto.preco);
// delete produto.preco; -> faça isso caso queira tirar um atributo de algum objeto por exemplo
console.log(produto);

produto.preco = null // -> para dizer que está sem preço de forma explicita
console.log(!!produto.preco);
console.log(produto);

