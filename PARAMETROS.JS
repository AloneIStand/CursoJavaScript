// parâmetros de função
              //2       //2
function soma(numero1, numero2){
    return numero1 + numero2 ;
}


console.log(soma(2, 2))
console.log(soma(245, 20))
console.log(soma(-500, 60))

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return  `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(40, "Juliana"));

function multiplica(numero1 = 1, numero2 = 1){ // =1 no final pra ter sempre um numero padrão caso esteja vazio quando executar a função
    return numero1 * numero2;
}
                            //9         //6 
console.log(multiplica(soma(4, 5), soma(3, 3)))


function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”


   //Em JavaScript, os parâmetros de funções tem undefined como valor predefinido.








