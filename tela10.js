var readline = require("readline-sync");

function cadastroProduto() {
  console.log("------------------------------");
  console.log("     Cadastro de Produto      ");
  console.log("------------------------------");

let produtos = {
  nome: readline.question('Digite o nome do produto: '),
  dataval: readline.question('Digite a data de validade do produto: '),
  quantidade: readline.question('Digite a quantidade: ')
}
console.log("Produto cadastrado:");
  var novoP = readline.question("Deseja cadastrar um novo produto? ");
  if (novoP === "sim") {
    cadastroProduto();
  } else {
    console.log("Produto cadastrado com sucesso!");
  }
  
  class item {
    constructor(nome, dataval, quantidade) {
      this.nome = nome;
      this.dataval = dataval;
      this.quantidade = quantidade;
    }}

  let listadeProdutos = [];
  let produto2 = new item (produtos.nome,produtos.dataval,produtos.quantidade)
  listadeProdutos.push (produto2)
  console.log (listadeProdutos)
 
  function gerarRelatorio(produtos) {
    console.log("-------------------------------------");
    console.log("        Relatório de Produtos        ");
    console.log("-------------------------------------");
  
    produtos.forEach((produtos, index) => {
      console.log(`Produto ${index + 1}:`);
      console.log(`Nome: ${produtos.nome}`);
      console.log(`Data de Validade: ${produtos.dataval}`);
      console.log(`Quantidade: ${produtos.quantidade}  `);
      console.log("-----------------------------------");
    });
  } gerarRelatorio()

}
cadastroProduto()
