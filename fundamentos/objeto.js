const prod1 = {} /* -> pode ser feito assim, indicando cada coisa 
como o "prod.nome, prod.preco" sem poder criar objetos dentro de outro objetos */
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4998.90;
prod1["desconto legal"] = 0.40; // -> evitar usar atributos com espaço
prod1.descontolegal = 0.40;

console.log(prod1);

const prod2 = { /* -> ou pode ser assim, indicando cada coisa já dentro das chaves 
    como "nome, preco" separados porem dentro das chaves */
    nome: "Camisa Polo",
    preco: 79.90,
    obj: { /* -> desse jeito tambem permite que se crie outros objetos dentro do obejto */
        blabla: 1,
        objeto: {
            balbla: 2
        }
    }
};

console.log(prod2);

// obs: objetos são resumidamente o "var", "let" e "const"