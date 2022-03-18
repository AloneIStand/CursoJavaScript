// var, o tipo var é lido antes pelo sistema, então não importa a ordem e onde ela é declarada

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)
// var area;

// let forma = 'retângulo'
// let altura = 5;
// let comprimento = 7;
// let area;

// if(forma === 'retângulo'){
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area)

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado'){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}


console.log(area)
// const precisa de um valor atribuido anteriormente por ser imutável