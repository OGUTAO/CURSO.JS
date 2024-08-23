const funcs = []

for ( let i = 0; i < 10; i++) {
    funcs.push(function(){
    console.log(i)
    })
}

funcs[2]() // -> os dois exemplos vão imprir os valores correspondentes pois quando vc faz um array usando o "let" no laço junto de uma função ele vai lembrar o valor de "i"
funcs[6]()
funcs[8]()