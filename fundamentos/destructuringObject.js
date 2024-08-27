const pessoa = {
    nome: "ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const {nome, idade} = pessoa; /* -> "{}" nesse caso significa que ele ta pedindo
para tirar "desestruturar" do objeto "pessoa" as informações de "nome e idade" */
console.log(nome, idade);

const {nome: n, idade: i} = pessoa; /* -> "nome: n" e a idade respectivamente estão fazendo o mesmo do exemplo de cima 
porem agora usando ":" e dando um nome nome para aquela variavel */
console.log(n, 1);

const {sobrenome, bemHumorada = true} = pessoa; /* -> nesse caso como o "sobrenome e bemHumorada" não foram definidos no const pessoa lá em cima eles irão retornar "undefined" 
porem no "bemHumorada" está definido que retorne true caso de "undefined" */
console.log(sobrenome, bemHumorada);

const {endereco: { logradouro, numero, cep}} = pessoa; /* nesse caso ele está acessando "endereco" para acessar o resto como "logradouro e numero", 
no caso do cep foi o mesmo caso de cima, ele não foi citado então ele vai retornar "undefined" */
console.log(logradouro, numero, cep);


