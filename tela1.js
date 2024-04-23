var readline = require ('readline-sync')
function menuLogin(){
console.log ('------------------------------')
console.log ('        Burguer Craft         ')
console.log ('------------------------------')
console.log ('x                            x')
console.log ('x                            x')
console.log ('x       Login:               x')
console.log ('x       Senha:               x')
console.log ('x                            x')
console.log ('x                            x')
console.log ('x                            x')
console.log ('x                            x')
console.log ('------------------------------')
console.log ('                              ')
console.log ('------------------------------')

}
menuLogin() 

function entrada(){
var login = readline.question ('Digite seu login: ')
var senha = readline.question ('Digite sua senha: ')

if (login==='admin' & senha=== '123') {console.log ('acesso concedido!')}
else {console.log ('Acesso Negado. Tente novamente!')
menuLogin()
entrada()}}

entrada()