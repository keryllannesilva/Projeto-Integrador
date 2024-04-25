var readline = require ('readline-sync')
function menuCadastro(){
    console.log ('----------------------------------')
    console.log ('   Cadastro de Clientes           ')
    console.log ('----------------------------------')
    console.log ('x                                x')
    console.log ('x  1. Novo por aqui? Cadastre-se x')
    console.log ('x  2. Já tem uma conta? Entrar   x')
    console.log ('x                                x')
    console.log ('x                                x')
    console.log ('x                                x')
    console.log ('x                                x')
    console.log ('x                                x')
    console.log ('--------------------------------- ')
    console.log ('                                  ')
    console.log ('----------------------------------')
    
    }
    menuCadastro()
    
    let escolhacliente= readline.question ('Digite sua escolha: ')
    
    switch (escolhacliente) {
        case '1':
            Informacoes()
         break;
    
        case '2':
            console.log ('op2')
         break;
    
        default:
    }

    class Cliente {
        constructor(nomecliente, datanasc, telefone,email) {
          this.nomecliente = nomecliente;
          this.datanasc = datanasc;
          this.telefone = telefone;
          this.email = email;
        }
      }

      listaClientes = []

    function Informacoes(){
        console.log ('----------------------------------')
        console.log ('       Cadastro de Clientes       ')
        console.log ('----------------------------------')
        let dadosCliente = {
            nomecliente: readline.question('Digite seu nome: '),
            datanasc: readline.question ('Digite a data do seu nascimento: '),
            telefone: readline.question ('Digite seu telefone: '),
            email: readline.question ('Digite seu e-mail: '),
        }
        
        let novoCliente = new Cliente (dadosCliente.nomecliente, dadosCliente.datanasc, dadosCliente.telefone, dadosCliente.email);
        listaClientes.push(novoCliente)

        console.log ('Cadastro concluído com sucesso!')
        menuPrincipal()
    }
    
