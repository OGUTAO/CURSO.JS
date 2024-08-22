//obs: evite usar "var" em chaves (escopos) globais para evitar conflitos
//obs2: as variaveis "var" tem escopos globais e de funções como mostrado abaixo
{
  {
    {
      {
        var sera = "Será?"; // -> o "console.log" retornarar o resultado independente do bloco (escopo) que ele estiver caso use o "var" na variavel 
      }                     // aqui ela é global pois não está dentro de uma função
    }
  }
}
console.log(sera);


function teste () {    // -> já nesse caso o "console.log" não retornarar o resultado caso esteja fora do bloco (escopo) pois esta dentro de uma função
    var local = 123;   // aqui ela não é global ela está somente dentro da função pois foi declarada dentro da função
    console.log(local);
}
teste();

