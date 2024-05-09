var readline = require ("readline-sync");
let listaDeProdutos = [];
listaClientes = [];
let conta =0;

function Encerrar(){
  console.log ('Programa Encerrado')
}


function menuLogin() {
 
  console.log("------------------------------------------------------------");
  console.log("                        Burguer Craft                       ");
  console.log("------------------------------------------------------------");
  

  
  var tentativas = 3;
  while (tentativas>0) {
     var login = readline.question("Digite seu login: ");
     var senha = readline.question("Digite sua senha: ");

  if ((login === "admin") & (senha === "123")) {
    console.log("Logando...");
    setTimeout(function () {
    console.clear();
    menuPrincipal();
  }, 1000);
  return;  
   
  } else {
    console.log("Acesso Negado. Tente novamente!");
    tentativas--
    console.log ('Tentativas restantes: ' + tentativas);
   
  }
    if (tentativas===0) {
      console.log('Conta Bloqueada! Entre em contato com o Admin para liberar o acesso')
      Encerrar()}
      
  
}}

menuLogin();



function menuPrincipal() {
  console.log("------------------------------------------------------------");
  console.log("                     Menu Principal                         ");
  console.log("------------------------------------------------------------");
  console.log("x                                                          x");
  console.log("x         1. Realizar Venda                                x");
  console.log("x         2. Estoque                                       x");
  console.log("x         3. Cadastro de Clientes                          x");
  console.log("x         4. Sair                                          x");
  console.log("x                                                          x");
  console.log("x                                                          x");
  console.log("x                                                          x");
  console.log("x                                                          x");
  console.log("------------------------------------------------------------");
  console.log("                     Seja Bem-Vindo!                        ");
  console.log("------------------------------------------------------------");

  var opcao = readline.question("Digite sua Escolha: ");
  if (opcao === "1") {
    console.log ('Direcionando...')
    setTimeout(function () {
      console.clear();
      menuVendas();
    }, 1000);
  } else if (opcao === "2") {
    console.log ('Direcionando...')
    setTimeout(function () {
      console.clear();
      estoque();
    }, 1000); 
} else if (opcao === "3") {
  console.log ('Direcionando...')
  setTimeout(function () {
    console.clear();
    Informacoes();
  }, 1000); 
  } else if (opcao === "4") {
    console.log ('Direcionando...')
    setTimeout(function () {
      console.clear();
      menuLogin();
    }, 1000);
  } else {
    console.log("Entrada Inválida! Tente Novamente");
    menuPrincipal();
  }
}

function menuVendas() {
  console.log("------------------------------------------------------------");
  console.log("                     Menu Vendas                            ");
  console.log("------------------------------------------------------------");
  console.log("x                                                          x");
  console.log("x                 1. Burguer da casa                       x");
  console.log("x                 2. Burguer Personalizado                 x");
  console.log("x                 3. Bebidas                               x");
  console.log("x                 4. Voltar                                x");
  console.log("x                                                          x");
  console.log("x                                                          x");
  console.log("x                                                          x");
  console.log("------------------------------------------------------------");
  console.log("                                                            ");
  console.log("------------------------------------------------------------");

  var opcaoVenda = readline.question("Digite sua escolha: ");

  switch (opcaoVenda) {
    case "1":
      console.log ('Direcionando...')
    setTimeout(function () {
      console.clear();
      menuHamb();
    }, 1000);
      break;

    case "2":
      console.log ('Direcionando...')
    setTimeout(function () {
      console.clear();
      hambPersonalizado();
    }, 1000);
      
      break;

    case "3":
      console.log ('Direcionando...')
      setTimeout(function () {
        console.clear();
        menuBebidas();
      }, 1000);
      break;

    case "4":
      console.log ('Direcionando...')
      setTimeout(function () {
        console.clear();
        menuPrincipal();
      }, 1000);
      break;

    default:
      console.log("Digite um valor válido!");
      opcaoVenda;
  }
}

function menuHamb() {
  console.log("------------------------------------------------------------");
  console.log("                 Escolha seu Burguer:                       ");
  console.log("------------------------------------------------------------");
  console.log("x                                                          x");
  console.log("x                 1. Burguer Vegano (R$10)                 x");
  console.log("x                 2. Burguer Goonies (R$15)                x");
  console.log("x                 3. Burguer Footlose (R$18)               x");
  console.log("x                 4. Burguer Porks (R$20)                  x");
  console.log("x                 5. Voltar                                x");
  console.log("x                                                          x");
  console.log("x                                                          x");
  console.log("------------------------------------------------------------");
  console.log("                                                            ");
  console.log("------------------------------------------------------------");

  var esc = readline.question("Digite sua escolha: ");

  switch (esc) {
    case "1":
      console.log("Adicionado na conta!");
      conta+=10
      console.log('Valor do Pedido: ' + conta);
      break;

    case "2":
      console.log("Adicionado na conta!");
      conta+=15
      console.log('Valor do Pedido: ' + conta);
      break;

    case "3":
      console.log("Adicionado na conta!");
      conta+=18
      console.log('Valor do Pedido: ' + conta);
      break;

    case "4":
      console.log("Adicionado na conta!");
      conta+=20
      console.log('Valor do Pedido: ' + conta);
      break;

    case "5":
      console.log ('Direcionando...')
    setTimeout(function () {
      console.clear();
      menuVendas();
    }, 1000);
      break;

    default:
      console.log("Digite um valor válido!");
      opcaovenda;
  }

  var algoMais = readline.question("Deseja algo mais?");
  if (algoMais === "sim") {
    console.clear()
    menuVendas();
  } else {
    console.clear()
    extrato()
    conta=0;
  }
}

function hambPersonalizado() {
  console.log("------------------------------------------------------------");
  console.log("                    Monte seu burguer                       ");
  console.log("                      Personalizado:                        ");
  console.log("------------------------------------------------------------");
  console.log("x                                                          x");
  console.log("x  1. [Pão, Carne 60g, 2 Acompanhamentos] (R$12,99)        x");
  console.log("x  2. [Pão, Carne 100g, 3 Acompanhamentos] (R$20,39)       x");
  console.log("x  3. [Pão, Duplo Smash 50g, 4 Acompanhamentos] (R$34,99)  x");
  console.log("x  4. Voltar                                               x");
  console.log("x                                                          x");
  console.log("x                                                          x");
  console.log("x                                                          x");
  console.log("------------------------------------------------------------");
  console.log("                                                            ");
  console.log("------------------------------------------------------------");

  var MenuHPersonalizado = readline.questionInt("Digite sua Escolha: ");
  

  switch (MenuHPersonalizado) {
    case 1:
      setTimeout(function () {
      console.log("Adicionado na conta!");
      conta+=12.99
      console.log('Valor do Pedido: ' + conta);
      console.clear();
      adcionarItens()
      }, 1000);
     
      break;

    case 2:
      setTimeout(function () {
      console.log("Adicionado na conta!");
      conta+=20.39
      console.log('Valor do Pedido: ' + conta);
      console.clear();
      adcionarItens()
    }, 1000);
      break;

    case 3:
      setTimeout(function () {
      console.log("Adicionado na conta!");
      conta+=34.99
      console.log('Valor do Pedido: ' + conta);
      console.clear();
      adcionarItens()
    }, 1000);
      break;

    case 4:
      console.log ('Direcionando...')
    setTimeout(function () {
      console.clear();
      menuPrincipal();
    }, 1000);
      break;

    default:
      console.log("Digite uma opção válida!");
      MenuHPersonalizado;
  }

  
}

function menuBebidas() {
  console.log("------------------------------------------------------------");
  console.log("                        Menu Bebidas                        ");
  console.log("------------------------------------------------------------");
  console.log("x                      Refrigerante                        x");
  console.log("x                 1. Coca-Cola             (R$7)           x");
  console.log("x                 2. Antartica             (R$6)           x");
  console.log("x                 3. H20 Limonato          (R$5)           x");
  console.log("x                                                          x");
  console.log("------------------------------------------------------------");
  console.log("x                                                          x");
  console.log("x                      Cervejas                            x");
  console.log("x                 4. Heineken              (R$10)          x");
  console.log("x                 5. budweiser             (R$10)          x");
  console.log("x                 6. Brahma                (R$10)          x");
  console.log("x                 7. Voltar                                x");
  console.log("------------------------------------------------------------");
  console.log("                                                            ");
  console.log("------------------------------------------------------------");

  var opcbebida = readline.questionInt("Digite sua escolha: ");

  switch (opcbebida) {
    case 1:
      console.log("Adicionado a conta!");
      conta+=7
      console.log('Valor do Pedido: ' + conta);
      break;
    case 2:
      console.log("Adicionado a conta!");
      conta+=6
      console.log('Valor do Pedido: ' + conta);
      break;
    case 3:
      console.log("Adicionado a conta!");
      conta+=5
      console.log('Valor do Pedido: ' + conta);
      break;
    case 4:
      console.log("Adicionado a conta!");
      conta+=10
      console.log('Valor do Pedido: ' + conta);
      break;
    case 5:
      console.log("Adicionado a conta!");
      conta+=10
      console.log('Valor do Pedido: ' + conta);
      break;
    case 6:
      console.log("Adicionado a conta!");
      conta+=10
      console.log('Valor do Pedido: ' + conta);
      break;
    case 7:
      console.log ('Direcionando...')
    setTimeout(function () {
      console.clear();
      menuVendas();
    }, 1000);
      break;
    default:
      console.log("Digite um valor válido!");
      opcbebida;
  }

  var algoMais3 = readline.question("Deseja algo mais?");
  if (algoMais3 === "sim") {
    console.clear()
    menuVendas();
  } else {
    console.clear()
    extrato()
    conta=0;
  }
}

function estoque() {
  console.log("------------------------------------------------------------");
  console.log("                         Estoque                            ");
  console.log("------------------------------------------------------------");
  console.log("x                                                          x");
  console.log("x                 1. Consulta de estoque                   x");
  console.log("x                 2. Cadastro de produto                   x");
  console.log("x                 3. Relatorio de estoque                  x");
  console.log("x                 4. Voltar                                x");
  console.log("x                                                          x");
  console.log("x                                                          x");
  console.log("x                                                          x");
  console.log("------------------------------------------------------------");
  console.log("                                                            ");
  console.log("------------------------------------------------------------");

  var MenudeEstoque = readline.question("Escolha uma opcao: ");
  var bu = parseInt(MenudeEstoque);
  switch (bu) {
    case 1:
      console.log ('Direcionando...')
    setTimeout(function () {
      console.clear();
      consultarProduto()
    }, 1000);
      break;
    case 2:
      console.log ('Direcionando...')
      setTimeout(function () {
        console.clear();
        cadastrarProduto();
      }, 1000);
      break;
    case 3:
      console.log ('Direcionando...')
      setTimeout(function () {
        console.clear();
        gerarRelatorio()
      }, 1000);
      break;
    case 4:
      console.log ('Direcionando...')
      setTimeout(function () {
        console.clear();
        menuPrincipal()
      }, 1000);
      break;
    default:
      console.log("Digite um valor válido!");
      MenudeEstoque;
  }}

  function loopEstoque(){
  var algoMais4 = readline.question("Deseja algo mais?");
  if (algoMais4 === "sim") {
    console.clear();
    estoque();
  } else {
    console.clear();
    menuPrincipal();
  }}




function cadastrarProduto() {

    class Produto {
        constructor(nome, dataval, quantidade) {
          this.nome = nome;
          this.dataval = dataval;
          this.quantidade = quantidade;
        }
      }


  console.log("------------------------------------------------------------");
  console.log("                    Cadastro de Produto                     ");
  console.log("------------------------------------------------------------");

  let nome = readline.question("Digite o nome do produto: ");
  let dataval = readline.question("Digite a data de validade do produto: ");
  let quantidade = parseInt(readline.question("Digite a quantidade: "));

  let novoProduto = new Produto(nome, dataval, quantidade);
  listaDeProdutos.push(novoProduto);

  console.log("Produto cadastrado com sucesso!");
  loopEstoque()
}

 
function consultarProduto() {
  console.log("------------------------------------------------------------");
  console.log("                    Consulta de Produto                     ");
  console.log("------------------------------------------------------------");

  let nomeBusca = readline.question(
    "Digite o nome do produto que deseja consultar: "
  );

  let produtoEncontrado = listaDeProdutos.find(
    (produto) => produto.nome === nomeBusca
  );

  if (produtoEncontrado) {
    console.log("Produto encontrado:");
    console.log(`Nome: ${produtoEncontrado.nome}`);
    console.log(`Data de Validade: ${produtoEncontrado.dataval}`);
    console.log(`Quantidade: ${produtoEncontrado.quantidade}`);
  } else {
    console.log("Produto não encontrado.");
  }
  var algoMais5 = readline.question("Deseja consultar outro produto?");
  if (algoMais5 === "sim") {
    console.clear()
    consultarProduto();
  } else {
    console.log("Redirecionando...");
    setTimeout(function () {
      console.clear();
      menuPrincipal();
    }, 1000);
  }
}

 
function gerarRelatorio() {
  console.log("------------------------------------------------------------");
  console.log("                  Relatório de Produtos                     ");
  console.log("------------------------------------------------------------");

  for (let i = 0; i < listaDeProdutos.length; i++) {
    const produto = listaDeProdutos[i];
    console.log(`Produto ${i + 1}:`);
    console.log(`Nome: ${produto.nome}`);
    console.log(`Data de Validade: ${produto.dataval}`);
    console.log(`Quantidade: ${produto.quantidade}`);
    console.log("----------------------");
  }
loopEstoque()
}
  

function Informacoes(){

    class Cliente {
        constructor(nomecliente, datanasc, telefone,email) {
          this.nomecliente = nomecliente;
          this.datanasc = datanasc;
          this.telefone = telefone;
          this.email = email;
        }
      }

    console.log ('----------------------------------------------------------')
    console.log ('                  Cadastro de Clientes                    ')
    console.log ('----------------------------------------------------------')
    let dadosCliente = {
        nomecliente: readline.question('Digite seu nome: '),
        datanasc: readline.question ('Digite a data do seu nascimento: '),
        telefone: readline.question ('Digite seu telefone: '),
        email: readline.question ('Digite seu e-mail: '),
    }
    
    let novoCliente = new Cliente (dadosCliente.nomecliente, dadosCliente.datanasc, dadosCliente.telefone, dadosCliente.email);

    listaClientes.push(novoCliente)
    console.log ('Cadastro concluído com sucesso!')
    console.log('')
    console.log ('Nome: '+ dadosCliente.nomecliente)
    console.log ('Data de Nascimento: '+ dadosCliente.datanasc)
    console.log ('Telefone: '+ dadosCliente.telefone)
    console.log ('E-mail: '+ dadosCliente.email)

    console.log ('')
      console.log ("Voltando para o menu principal...")

    setTimeout(function () {
      console.clear();
      menuPrincipal();
    }, 7000);
}

function extrato(){
  console.log("------------------------------------------------------------");
  console.log("                     Total Do Pedido                        ");
  console.log("------------------------------------------------------------");
  console.log("                                                            ");
  console.log("           O total do seu pedido foi: R$"+ conta             );
  console.log("           Pague via PIX: Aleatorio@gmail.com               ");
  console.log("                                                            ");
  console.log("                                                            ");
  console.log("                                                            ");
  console.log("           Aguardando confirmação de pagamento para         ");
  console.log("           iniciar a produção...                            ");
  console.log("                                                            ");

  setTimeout(function () {
    console.log("Produção Iniciada!");
    console.log("Informaremos quando o pedido estiver pronto!")
    console.log("");
    console.log("Voltando para o Menu Principal...");
  }, 10000);
  

  setTimeout(function () {
    console.clear();
    menuPrincipal();
  }, 18000);
}

function adcionarItens(){
  console.log("------------------------------------------------------------");
  console.log("                    Monte seu Hamburguer                    ");
  console.log("                      Personalizado:                        ");
  console.log("------------------------------------------------------------");
  console.log ('')
  console.log("       Pão: Australiano, Brioche, Americano, Italiano.      ");
  console.log ('')
  console.log("       Carne: Picanha, Maminha, Fraldinha, Alcatra.         ");
  console.log ('')
  console.log("       Queijos: Cheddar, Prato, Suíço, Coalho.              ");
  console.log ('')
  console.log("       Salada: Tomate, Cebola, Alface, Pimentão.            ");
  console.log ('')
  console.log("       Molhos: Da casa, Parmesão, Verde, Milho.             ");
  console.log ('')

  PersHamb = readline.question ("Monte seu Hamburguer: ")
  
  console.log ('Pedido realizado com sucesso!')

  var algoMais2 = readline.question("Deseja algo mais?");
  if (algoMais2 === "sim") {
    console.clear();
    menuVendas();
  } else {
    console.clear()
    extrato()
    conta=0;
  }
}