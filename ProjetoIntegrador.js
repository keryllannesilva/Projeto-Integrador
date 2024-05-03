var readline = require("readline-sync");
let listaDeProdutos = [];
listaClientes = [];
let conta = ;


function menuLogin() {
  console.log("------------------------------");
  console.log("        Burguer Craft         ");
  console.log("------------------------------");
  

  var login = readline.question("Digite seu login: ");
  const tentativas = 3;
  while (tentativas>0) {
     var senha = readline.question("Digite sua senha: ");
  
  if ((login === "admin") & (senha === "123")) {
    console.log("acesso concedido!");
  } else {
    console.log("Acesso Negado. Tente novamente!");
    tentativas--
    console.log ('Tentativas restantes: ' + tentativas);}
    if (tentativas===0) {
      console.log('Conta Bloqueada! Entre em contato com o Admin para liberar o acesso')}
    menuLogin();
    login;
    senha;
  }}

  
}
menuLogin();
menuPrincipal();

function menuPrincipal() {
  console.log("------------------------------");
  console.log("        Menu Principal        ");
  console.log("------------------------------");
  console.log("x                            x");
  console.log("x   1. Realizar Venda        x");
  console.log("x   2. Estoque               x");
  console.log("x   3. Cadastro de Clientes  x");
  console.log("x   4. Sair                  x");
  console.log("x                            x");
  console.log("x                            x");
  console.log("x                            x");
  console.log("x                            x");
  console.log("------------------------------");
  console.log("       Seja Bem-Vindo!        ");
  console.log("------------------------------");

  var opcao = readline.question("Digite sua Escolha: ");
  if (opcao === "1") {
    menuVendas();
  } else if (opcao === "2") {
    estoque();
} else if (opcao === "3") {
    Informacoes();
  } else if (opcao === "4") {
    menuLogin();
  } else {
    console.log("Entrada Inválida! Tente Novamente");
    menuPrincipal();
  }
}

function menuVendas() {
  console.log("------------------------------");
  console.log("        Menu Vendas           ");
  console.log("------------------------------");
  console.log("x                            x");
  console.log("x   1. Burguer da casa       x");
  console.log("x   2. Burguer Personalizado x");
  console.log("x   3. Bebidas               x");
  console.log("x   4. Voltar                x");
  console.log("x                            x");
  console.log("x                            x");
  console.log("x                            x");
  console.log("------------------------------");
  console.log("                              ");
  console.log("------------------------------");

  var opcaoVenda = readline.question("Digite sua escolha: ");

  switch (opcaoVenda) {
    case "1":
      menuHamb();
      break;

    case "2":
      hambPersonalizado();
      break;

    case "3":
      menuBebidas();
      break;

    case "4":
      menuPrincipal();
      break;

    default:
      console.log("Digite um valor válido!");
      opcaoVenda;
  }
}

function menuHamb() {
  console.log("------------------------------");
  console.log("      Escolha seu Burguer:    ");
  console.log("------------------------------");
  console.log("x                            x");
  console.log("x  1. Burguer Vegano (R$10)  x");
  console.log("x  2. Burguer Goonies (R$15) x");
  console.log("x  3. Burguer Footlose (R$18)x");
  console.log("x  4. Burguer Porks (R$20)   x");
  console.log("x  5. Voltar                 x");
  console.log("x                            x");
  console.log("x                            x");
  console.log("------------------------------");
  console.log("                              ");
  console.log("------------------------------");

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
      console.log(menuVendas());
      break;

    default:
      console.log("Digite um valor válido!");
      opcaovenda;
  }

  var algoMais = readline.question("Deseja algo mais?");
  if (algoMais === "sim") {
    menuVendas();
  } else {
    console.log("Pedido efetuado com sucesso!");
    console.log ("O total do seu pedido é: " + conta);
    conta=0;
    menuPrincipal();
  }
}

function hambPersonalizado() {
  console.log("-----------------------------------------------------------");
  console.log("                    Monte seu burguer                      ");
  console.log("                      Personalizado:                       ");
  console.log("-----------------------------------------------------------");
  console.log("x                                                         x");
  console.log("x 1. [Pão, Carne 60g, 2 Acompanhamentos] (R$12,99)        x");
  console.log("x 2. [Pão, Carne 100g, 3 Acompanhamentos] (R$20,39)       x");
  console.log("x 3. [Pão, Duplo Smash 50g, 2 Acompanhamentos] (R$34,99)  x");
  console.log("x 4. Voltar                                               x");
  console.log("x                                                         x");
  console.log("x                                                         x");
  console.log("x                                                         x");
  console.log("-----------------------------------------------------------");
  console.log("                                                           ");
  console.log("-----------------------------------------------------------");

  var MenuHPersonalizado = readline.question("Escolha uma opção: ");
  var bur = parseInt(MenuHPersonalizado);

  switch (MenuHPersonalizado) {
    case 1:
      console.log("Adicionado na conta!");
      conta+=12.99
      console.log('Valor do Pedido: ' + conta);
      break;

    case 2:
      console.log("computar na conta");
      conta+=20.39
      console.log('Valor do Pedido: ' + conta);
      break;

    case 3:
      console.log("computar na conta");
      conta+=34.99
      console.log('Valor do Pedido: ' + conta);
      break;

    case 4:
      menuPrincipal();
      break;

    default:
      console.log("Digite uma opção válida!");
      MenuHPersonalizado;
  }

  var algoMais2 = readline.question("Deseja algo mais?");
  if (algoMais2 === "sim") {
    menuVendas();
  } else {
    console.log("Pedido efetuado com sucesso!");
    console.log ("O total do seu pedido é: " + conta);
    conta=0;
    menuPrincipal();
  }
}

function menuBebidas() {
  console.log("------------------------------");
  console.log("        Menu Bebidas          ");
  console.log("------------------------------");
  console.log("x       Refrigerante         x");
  console.log("x   1. Coca-Cola     (R$7)   x");
  console.log("x   2. Antartica     (R$6)   x");
  console.log("x   3. H20 Limonato  (R$5)   x");
  console.log("x                            x");
  console.log("------------------------------");
  console.log("x                            x");
  console.log("x       Cervejas             x");
  console.log("x   4. Heineken      (R$10)  x");
  console.log("x   5. budweiser     (R$10)  x");
  console.log("x   6. Brahma        (R$10)  x");
  console.log("x   7. Voltar                x");
  console.log("------------------------------");
  console.log("       Seja Bem-Vindo!        ");
  console.log("------------------------------");

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
      menuVendas();
      break;
    default:
      console.log("Digite um valor válido!");
      opcbebida;
  }

  var algoMais3 = readline.question("Deseja algo mais?");
  if (algoMais3 === "sim") {
    menuVendas();
  } else {
    console.log("Pedido efetuado com sucesso!");
    console.log ("O total do seu pedido é: " + conta);
    conta=0;
    menuPrincipal();
  }
}

function estoque() {
  console.log("------------------------------");
  console.log("           Estoque            ");
  console.log("------------------------------");
  console.log("x                            x");
  console.log("x 1. Consulta de estoque     x");
  console.log("x 2. Cadastro de produto     x");
  console.log("x 3. Relatorio de estoque    x");
  console.log("x 4. Voltar                  x");
  console.log("x                            x");
  console.log("x                            x");
  console.log("x                            x");
  console.log("------------------------------");
  console.log("                              ");
  console.log("------------------------------");

  var MenudeEstoque = readline.question("Escolha uma opcao: ");
  var bu = parseInt(MenudeEstoque);
  switch (bu) {
    case 1:
      consultarProduto()
      break;
    case 2:
      cadastrarProduto();
      break;
    case 3:
      gerarRelatorio()
      break;
    case 4:
      menuPrincipal()
      break;
    default:
      console.log("Digite um valor válido!");
      MenudeEstoque;
  }
  var algoMais4 = readline.question("Deseja algo mais?");
  if (algoMais4 === "sim") {
    menuVendas();
  } else {
    menuPrincipal();
  }
}



function cadastrarProduto() {

    class Produto {
        constructor(nome, dataval, quantidade) {
          this.nome = nome;
          this.dataval = dataval;
          this.quantidade = quantidade;
        }
      }


  console.log("------------------------------");
  console.log("     Cadastro de Produto      ");
  console.log("------------------------------");

  let nome = readline.question("Digite o nome do produto: ");
  let dataval = readline.question("Digite a data de validade do produto: ");
  let quantidade = parseInt(readline.question("Digite a quantidade: "));

  let novoProduto = new Produto(nome, dataval, quantidade);
  listaDeProdutos.push(novoProduto);

  console.log("Produto cadastrado com sucesso!");
}

 
function consultarProduto() {
  console.log("------------------------------");
  console.log("      Consulta de Produto     ");
  console.log("------------------------------");

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
  var algoMais5 = readline.question("Deseja tentar novamente?");
  if (algoMais5 === "sim") {
    consultarProduto();
  } else {
    console.log("Redirecionando...");
    menuPrincipal();
  }
}

 
function gerarRelatorio() {
  console.log("-------------------------------------");
  console.log("        Relatório de Produtos        ");
  console.log("-------------------------------------");

  for (let i = 0; i < listaDeProdutos.length; i++) {
    const produto = listaDeProdutos[i];
    console.log(`Produto ${i + 1}:`);
    console.log(`Nome: ${produto.nome}`);
    console.log(`Data de Validade: ${produto.dataval}`);
    console.log(`Quantidade: ${produto.quantidade}`);
    console.log("----------------------");
  }
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

