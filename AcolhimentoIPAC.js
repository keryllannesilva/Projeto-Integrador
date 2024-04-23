var readline = require ('readline-sync')
function menuLogin(){
console.log ('------------------------------')
console.log ('      ACOLHIMENTO IPAC        ')
console.log ('------------------------------')
console.log ('x                            x')
console.log ('x   USUÁRIO:                 x')
console.log ('x   DATA:                    x')
console.log ('x                            x')
console.log ('x                            x')
console.log ('------------------------------')
console.log ('         BOM CULTO!           ')
console.log ('------------------------------')

var login = readline.question ('Digite seu Usuário: ')
var datahj = readline.question ('Digite a data de hoje: ')
}
menuLogin() 
  


function menuPrincipal(){
   console.log ('------------------------------')
   console.log ('      ACOLHIMENTO IPAC        ')
   console.log ('------------------------------')
   console.log ('x                            x')
   console.log ('x   1. CADASTRAR VISITANTE   x')
   console.log ('x   2. INFORMAR AVISO        x')
   console.log ('x   3. SAIR                  x')
   console.log ('x                            x')
   console.log ('------------------------------')
   console.log ('         BOM CULTO!           ')
   console.log ('------------------------------')
   

   var escolhaP = readline.question ('Digite sua escolha: ')
       
   do{switch (escolhaP){
       case '1':
           menuCadastro();
           break;
       case '2':
           menuAviso();
           break;
       case '3':
           console.log ('Saindo...');
           break;
       default: 
           console.log ('Entrada não aceita. Tente outra vez!');}}
           while (escolhaP>3)

}
menuPrincipal()


        
        

function menuCadastro(){
            console.log ('------------------------------')
            console.log ('      ACOLHIMENTO IPAC        ')
            console.log ('------------------------------')
            console.log ('x                            x')
            console.log ('x   NOME:                    x')
            console.log ('x   SEXO:                    x')
            console.log ('x   TELEFONE:                x')
            console.log ('x   ENDEREÇO:                x')
            console.log ('x   AUTORIZA VISITAS:        x')
            console.log ('x                            x')
            console.log ('------------------------------')
            console.log ('                              ')
            console.log ('------------------------------')
            
            var visitante = {
                nome: readline.question ('Digite o Nome: '),
                sexo: readline.question ('Digite o Sexo: '),
                telefone: readline.question ('Digite o telefone para contato: '),
                endereco: readline.question ('Digite o endereço: '),
                visita: readline.question ('O visitante deseja receber visitas? ')
                };
                console.log ('Visitante cadastrado com sucesso!')
        
                var opcao= readline.question ('Digite 1 para voltar ao menu principal.')
                if (opcao === '1'){menuPrincipal()} 
        }
            
            
function menuAviso(){
                console.log ('------------------------------')
                console.log ('      ACOLHIMENTO IPAC        ')
                console.log ('------------------------------')
                console.log ('x                            x')
                console.log ('x   DIGITE O AVISO:          x')
                console.log ('x                            x')
                console.log ('x                            x')
                console.log ('x                            x')
                console.log ('x                            x')
                console.log ('------------------------------')
                console.log ('     Digite 1 para sair.      ')
                console.log ('------------------------------')
              
                var aviso = readline.question ('Digite o aviso: ')
                menuSaida()
                if (aviso === '1') {menuPrincipal()};
                
}

 function menuSaida(){
                console.log ('------------------------------')
                console.log ('      ACOLHIMENTO IPAC        ')
                console.log ('------------------------------')
                console.log ('x                            x')
                console.log ('x   Deseja algo mais?        x')
                console.log ('x     1. Sim                 x')
                console.log ('x     2. Não                 x')
                console.log ('x                            x')
                console.log ('x                            x')
                console.log ('------------------------------')
                console.log ('                              ')
                console.log ('------------------------------')
              
                var saida = readline.question ('Digite sua escolha: ')
                if (saida === '1'){menuPrincipal()}
                else {console.log ('Saindo...')};
            
            }        
                

            
            
        
    

