const funcs = [] // -> abriu um array
for (var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() // -> os dois exemplos vão imprir 10 pois isso é um erro quando vc faz um array usando o "var" no laço junto de uma função pq ele não vai lembrar o valor de "i"
funcs[8]()