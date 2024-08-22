const a = {name: "Teste"}; /* -> fazendo em forma de objeto ele "a" e "b"
vão ter o mesmo valor (refencia por referencia(objetos e funções)) */
const b = a;
b.name = "Opa"

console.log(a);

let c = 3; /* -> já em forma simples neste caso de numero o valor de "a" e "b" vão ser 
diferentes pois cada um tem seu valor (referencia por valor) */
let d = c;
d++

console.log(c)
console.log(d)
