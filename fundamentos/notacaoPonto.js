console.log(Math.ceil(6.1)) // -> "Math.ceil" vai arrendondar o valor

const obj1 = {}
obj1.nome = "bola"
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome // -> "this" significa que o nome associado a esse objeto vai ficar visivel para fora do escopo ou seja pode usar até dentro da função que tem como usar-lo fora do escopo
    this.exec = function() {
        console.log("exec")
    }
}

const obj2 = new Obj("cadeira")
const obj3 = new Obj("mesa")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()