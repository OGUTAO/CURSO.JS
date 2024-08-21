var a = 3;
let b = 4; // -> melhor usar assim do que "var"

var a = 30;
b = 40; // n pode usar "let" de novo se não buga, no caso do "var" n tem problema

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5;
/* c = 50 -> n pode modificar uma constante (use contante com algo que voce não va mudar no seu codigo pois ela não pode ser modificada) 
caso contrario use "let" pois pode modificar o valor */
console.log(c);