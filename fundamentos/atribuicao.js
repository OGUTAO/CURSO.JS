const a = 7
let b = 3

b += a // -> "+=" é igual a "b = b + 4" e está acrescentando o valor de "a" em "b" ou seja o resultado será 10
console.log(b)

b -= 4 // -> "-=" é igual a "b = b - 4" e faz o mesmo do de cima mas nesse caso ele está pegando o valor de "b" e subtraindo por "4"
console.log(b)

b *= 2 // -> "*=" é igual a "b = b * 2" e faz a multiplicação do número nesse caso por 2
console.log(b)

b /= 2 // -> "/=" é igual a "b = b / 2" e faz a divisão do número nesse caso por 2
console.log(b)

b %= 2 // -> "%=" é igual a "b = b % 2" faz a resolução modular ou seja ele faz a divisão se o valor por "par" ele retornará "0" e se for "impar" ele retornará "1"
console.log(b)

