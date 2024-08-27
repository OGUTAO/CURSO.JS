const [a] = [10];
console.log(a);

const[n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] /* -> dessa forma ele vai retornar o valor de "n1" que é = 10 pois ele está declarado e dentro do array de 5 digitos, "n2" não vai ter seu valor impresso pois não foi declarado, 
"n3" terá seu valor impresso pois está declarado e está dentro do array de 5 dígitos, "n4" está na mesma situação do "n2", "n5" vai retornar undefined pois ele não está mais dentro do array de 5 digitos 
pois ele ja seria o 6 digito, e o "n6" seria undefined porem ele está retornando 0 pois foi atribuido a ele mesmo esse valor */
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] /* -> neste caso ele está ignorando o primeiro array com o "[," depois ele ta acessadno o segundo array com o segundo "[" depois ele 
está pulando o primeiro elemento do array com "," depois acessando "nota" que seria o segundo elemento do array no caso o numero "6", obs: não se recomenda usar dessa forma pois é dificil de ler, use a forma de cima */
console.log(nota)
