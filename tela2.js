var readline = require ('readline-sync')
function menuPrincipal(){
console.log ('------------------------------')
console.log ('        Menu Principal        ')
console.log ('------------------------------')
console.log ('x                            x')
console.log ('x   1. Realizar Venda        x')
console.log ('x   2. Consultar Estoque     x')
console.log ('x   3. Sair                  x')
console.log ('x                            x')
console.log ('x                            x')
console.log ('x                            x')
console.log ('x                            x')
console.log ('------------------------------')
console.log ('       Seja Bem-Vindo!        ')
console.log ('------------------------------')

}
menuPrincipal() 

var opcao = readline.question ('Digite sua Escolha: ')
if (opcao=== '1') {console.log ('ir para menu realizar vendas')}
else if (opcao=== '2'){console.log ('ir para menu consultar estoque')}
else {console.log ('retornar para fazer login')}