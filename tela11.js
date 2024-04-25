let readline = require ('readline-sync')
// Definição da classe Produto
class Produto {
  constructor(nome, dataval, quantidade) {
    this.nome = nome;
    this.dataval = dataval;
    this.quantidade = quantidade;
  }
}

// Lista para armazenar os produtos cadastrados
let listaDeProdutos = [];

// Função para cadastrar um novo produto
function cadastrarProduto() {
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

// Função para consultar um produto pelo nome
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
}

// Função para gerar o relatório de todos os produtos cadastrados
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
function menu() {
  console.log("------------------------------------");
  console.log("           Menu Principal           ");
  console.log("------------------------------------");
  console.log("1. Cadastrar Produto");
  console.log("2. Consultar Produto");
  console.log("3. Gerar Relatório de Produtos");
  console.log("4. Sair");

  let opcao = parseInt(readline.question("Escolha uma opção: "));

  switch (opcao) {
    case 1:
      cadastrarProduto();
      break;
    case 2:
      consultarProduto();
      break;
    case 3:
      gerarRelatorio();
      break;
    case 4:
      console.log("Saindo...");
      return;
    default:
      console.log("Opção inválida.");
  }

  menu(); // Chamada recursiva do menu para continuar exibindo-o após a execução de uma opção
}

// Chamada inicial do menu
menu();
