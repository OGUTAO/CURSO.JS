function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // -> essa operação está dizendo que se o "min" for maior do que o "max" então inverta o valores ou seja o max vira mim e vice e versa
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])); /* -> nesse caso como é um array vc n declara quem é o min e o max, então ele vai na ordem sendo 
o minimo primeiro e o maximo depois pois eu escrevi nessa ordem na linha de cima porem como o min não pode ser maior que o minimo ele vai fazer a substituição que eu pedi 
dentro da function para que os valores se invertam e o codigo funcione */
console.log(rand([992])); /* -> aqui ele vai atribuir como se fosse o minimo pois so atribuir um valor então ele vai atribuir no minimo pois ele é o primeiro valor que eu coloquei 
na ordem la em cima se fosse ao contrario ele iria fazer a substituição de acordo com oque eu coloquei dentro da função, igual no exemplo a cima pois o minimo não pode ser maior que o máximo */
console.log(rand([, 10])); /* -> aqui vai ser igual o de cima porem no valor maximo pois a "," está pulando o valor do minimo 
que veio primeiro e atribuindo somente o valor para o segundo que é o maximo */
console.log(rand([])); // -> aqui ele vai passar os valores padrões que eu indiquei la em cima na funçãi ou seja de "0 até 1000"

