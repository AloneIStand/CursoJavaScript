const texto1 = "Olá mundo!";
const texto2 = 'Olá mundo!'; //Javascript le igualmente as aspas duplas e unicas igualmente(ao menos deveria)
const senha = "senhaSuperSegura456!"
const StringDeNumeros = "34567";

const citacao = "Meu nome é ";
const meuNome = "Leonardo";


// concatenação (+)

console.log(citacao + meuNome)

//template string OU template literal

//Códigos de caractéres especiais https://home.unicode.org/
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//Uma das formas de tratar isso é padronizando todos os inputs 
//para o formado de texto que será comparado antes mesmo de fazer a comparação.
//Neste caso transformando todos os caracteres em letras minúsculas.

const cidade ="belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo);