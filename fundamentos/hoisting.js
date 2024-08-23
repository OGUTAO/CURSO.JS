/* usando "var" em JavaScript não tem problema declarar o variavel depois do "console.log" 
pois ele vai fazer o içamento (subir) o variavel ou seja ela vai existir então o codigo vai rodar 
mas ela não vai estar definida pois so foi definida na linha debaixo do "console.log" */
console.log("a =", a);
var a = 2;
console.log("a =", a);

/* usando "let" já não funciona esse içamento ifual quando usa o "var" ou seja tem que declarar
a variavel antes de usar o "console.log" */
console.log("b =",b);
let b = 2;

// dica: sempre declare a variavel antes pois o hoisting (içamento) só funciona com o "var" em JavaScript, para não se confundir em outras linguagens