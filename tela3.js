var readline = require ('readline-sync')
function menuVendas(){
console.log ('------------------------------')
console.log ('        Menu Vendas           ')
console.log ('------------------------------')
console.log ('x                            x')
console.log ('x   1. Burguer da casa       x')
console.log ('x   2. Burguer Personalizado x')
console.log ('x   3. Bebidas               x')
console.log ('x   4. Voltar                x')
console.log ('x                            x')
console.log ('x                            x')
console.log ('x                            x') 
console.log ('------------------------------')
console.log ('                              ')
console.log ('------------------------------')

}
menuVendas() 

function opvenda (){
    var opcaoVenda = readline.question ('Digite sua escolha: ')
    

switch (opcaoVenda) {
    case '1': 
     console.log ('ir para menu de hmaburgueres tradicionais')
     break;
    
    case '2': 
     console.log ('ir para menu de burguer personalizado')
     break;
    
    case '3': 
     console.log ('ir para bebidas')
     break;

    case '4':
     console.log ('voltar ao menu')
     break;

    default:
        console.log ('Digite um valor válido!')
        opvenda()
        
}}

opvenda()