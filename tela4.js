var readline = require ('readline-sync')
function menuHamb(){
console.log ('------------------------------')
console.log ('        Menu Vendas           ')
console.log ('------------------------------')
console.log ('x                            x')
console.log ('x  1. Burguer Vegano (R$10)  x')
console.log ('x  2. Burguer Goonies (R$15) x')
console.log ('x  3. Burguer Footlose (R$18)x')
console.log ('x  4. Burguer Porks (R$20)   x')
console.log ('x  5. Voltar                 x')
console.log ('x                            x')
console.log ('x                            x')
console.log ('------------------------------')
console.log ('                              ')
console.log ('------------------------------')

}
menuHamb()

var esc= readline.question ('Digite sua escolha: ')

switch (esc) {
    case '1':
        console.log ('op1')
     break;

    case '2':
        console.log ('op2')
     break;

    case '3':
        console.log ('op3')
     break;

    case '4':
        console.log ('op4')
     break;

    case '5':
        console.log ('op5')
     break;
    
    default:
        console.log ('outro')
}
