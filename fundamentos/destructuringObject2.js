function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min // -> "Math.random" vai gerar valores aleatorios ou seja o resultado no final sempre sera aleatorio
    return Math.floor(valor) // -> "Math.floor" vai retornar o valor dessa conta randomica
}
console.log(rand({})) // -> aqui ele vai imprimir o valor randomico entre o min e o max definido la em cima 
const obj = {max: 50, min: 40}; // -> aqui está definindo o maximo e o minimo então o valor randomico vai ficar sendo gerado entre eles
console.log(rand(obj)); 
console.log(rand({min: 955})); // -> aqui é parecido com o de cima porem vai ser com o minimo em "955" e o máximo "1000" que ja foi definido por padrão la em cima e não alterou aqui no console.log

