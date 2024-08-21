/* ! -> vai inverter caso seja "true" vira "false" ou vice e versa, 
   !! -> volta pro padrão seja ele "true ou false"
   || -> "OU", significa faça isso caso não dê faça isso e assim sucessivamente ate acahr o "true" e imprimir oque pode retornar true */
let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

//casos que vão retornar true 
console.log("os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!! " ");
console.log(!! "texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

// casos que vão retornar false
console.log("os falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("pra finalizar...");
console.log(!!("" || null || 0 || " "));

let nome = "lucas" /* -> nesse caso tem um nome definido então ele vai retornar o "nome' ou seja (true) */
console.log(nome || "Desconhecido");
let nome2 = "" /* -> nesse caso não tem um nome definido então ele vai retornar o "Desconhecido" ou seja (false) */
console.log(nome2 || "Desconhecido");