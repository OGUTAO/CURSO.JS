// Usando "var" se estiver sem função declarada a variavel "numero" vai ter seu valor substituido pelo oque vier depois independente se tiver escopos diferente separando ou não
var numeroA = 1;
{
    var numeroA = 2;
    console.log("dentroA =", numeroA);
}
console.log("foraA =", numeroA);

// Usando "var" se estiver com função declarada a variavel "numero" não terá seu valor substituido e será correspondente ao valor do seu escopo (chaves)

var numeroB = 1;
function teste () { 
    var numeroB = 2;
    console.log("dentroB =", numeroB);
}
teste();
console.log("foraB =", numeroB);

