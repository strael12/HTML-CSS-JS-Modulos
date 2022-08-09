// Função 
// Sem parametro 
// function calculaMedia(){
//     let nota1 = Number(prompt('Digite a primeira nota: '));
//     let nota2 = Number(prompt('Digite a segunda nota: '));
//     let nota3 = Number(prompt('Digite a terceira nota: '));
//     let media = (nota1 + nota2 + nota3) / 3;

//     if (media < 3) {
//         console.log('REPROVADOOO! Nota Final = ' + media.toFixed(1));
//     }else if(media > 3 && media < 7){
//         console.log('Tem jeito Nota Final = ' + media.toFixed(1));
//     } else if (media >= 7) {
//         console.log('Aprovadíssimo! Nota Final = ' + media.toFixed(1));
//     }
   
// }

// calculaMedia();




// Filtra média
// function validaMedia(media){
//     if (media < 3) {
//         console.log('REPROVADOOO! Nota Final = ' + media.toFixed(1));
//     }else if(media > 3 && media < 7){
//         console.log('Tem jeito Nota Final = ' + media.toFixed(1));
//     } else if (media >= 7) {
//         console.log('Aprovadíssimo! Nota Final = ' + media.toFixed(1));
//     }

//     return media;
// }

// function cMedia(media){
//     if (media < 3) {
//         console.log('REPROVADOOO! Nota Final = ' + media.toFixed(1));
//     }else if(media > 3 && media < 7){
//         console.log('Tem jeito Nota Final = ' + media.toFixed(1));
//     } else if (media >= 7) {
//         console.log('Aprovadíssimo! Nota Final = ' + media.toFixed(1));
//     }
// }



// Com Parametro 
// function calculaMedia(n1,n2,n3,media){
//     n1 = Number(prompt('Digite a primeira nota: '));
//     n2 = Number(prompt('Digite a segunda nota: '));
//     n3 = Number(prompt('Digite a terceira nota: '));
//     media = (n1 + n2 + n3) / 3;
//     cMedia(media);
// }

// calculaMedia();




// function calculadora(n1,n2,soma){
//     n1 = 10;
//     n2 = 20;
//     soma = n1 + n2;
//     console.log(soma);
// }
// calculadora();




// let username;
// username = '432nns';
// username = '99jssi';


// console.log(username);

// function saudacao(nome){
//     console.log('Bom dia ' + nome);
// }

// saudacao('Rafael');























// Closure
// function Saudacao(nome){
//     console.log('Olá bom dia ' + nome);
// }

// function Carrinho(preco,descricao){
//     console.log(preco,descricao);
// }

// function exec(){
//     Saudacao('Ilana');
//     Carrinho(10.00,'chocolate');
// }


// exec();




// function Cadastro(nome, idade, email){
//     console.log('Qual seu nome? ' + nome);
//     console.log('Idade? ' + idade);
//     console.log('Digite agora seu email ;) ' + email);
// }

// function Melissa(){
//     const nome = 'Melissa';
//     let idade = '24';
//     let email = 'melissa@gmail.com';

//     Cadastro(nome, idade, email);
// }

// function cadastroMelissa(){
//     Melissa();
// }

// cadastroMelissa();






























// Conceito de callback 
// function Cadastro(callback){
//     callback();
// }

// Cadastro(function(){
//     const nome = 'Rebeca';
//     console.log('Nome: ' + nome);
// });





// function Cadastro(galinha){
//     galinha();
// }

// Cadastro(function(){
//     let nome = 'Rachel';
//     console.log('Nome da galinha: ' + nome);
// })




// function Cadastro(callback){
//     callback();
// }

// Cadastro(function() {
//     const nome = prompt('Digite o seu nome:');
//     const email = prompt('Digite o seu email:');

//     if(nome.trim() !== '' && email.trim() !== ''){
//         console.log(nome,email);
//     }else {
//         alert('Todos os campos');
//     }
// })



// calculadora 
// userlogin
// calculaMedia

// function calculaMedia(callback){
//     callback()
// }

// calculaMedia(function(){
//     const nota1 = Number(prompt('Digite a primeira nota: '));
//     const nota2 = Number(prompt('Digite a segunda nota: '));
//     const nota3 = Number(prompt('Digite a terceira nota: '));
// })











// Função arrow

// function Empregad(){

// }

// const Empregado = nome => {
//     console.log(nome);
// }

// Empregado('Luiz');

// const Empregado = (nome, telefone) => {
//     console.log(nome,telefone);
// }

// Empregado('Luiz');





// const Caixa = (bloco,pasta) => {
//     console.log(bloco,pasta);
// }

// Caixa('pins','papeis');



// const Caixa = (bloco,pasta) => console.log(bloco,pasta);
// Caixa('pins','papeis');



// const adicao = (n1,n2) => n1 + n2;
// console.log(adicao(1,2));













// IIFE --> base de um constructor  
// (function(){
//     alert('Olá');
// }())


// (function(){
//    const usuario = 'Fernando';
//    const senha = 'r32riodnsoanfdoi';
   
//    if(usuario && senha.length > 8){
//     console.log()
//    }
// }())



// setTimeout(function(){
//     (function(){
//         // alert('Seja bem vindo!');
//         const backdrop = document.querySelector('.backdrop');
//         const modal = document.querySelector('.modal');
    
//         backdrop.style.display = 'block';
//         modal.style.display = 'block';
//     }())
// },2000);











// Object 
// const person = {
//     name: 'Rodrigo',
//     age: '22',
//     email: 'rodrigo@gmail.com',
//     imprimir() {
//         return `${person.name} tem ${person.age} e o E-mail: ${person.email}`;
//     }
// }

// let imprimir = `${person.name} tem ${person.age} e o E-mail: ${person.email}`;
// console.log(person.imprimir());

// console.log()




// const pessoa = {
//     nome: 'Melissa',
//     idade: '68',
//     contar(){
//         return `${pessoa.nome} tem ${pessoa.idade} anos. Nem parece!`;
//     }
// }


// console.log(pessoa.contar());

// let contar = `${pessoa.nome} tem ${pessoa.idade} anos. Nem parece!`;
// console.log(contar);






// console.log();
















// constructor
// function Pessoa(nome,idade,telefone){
//     this.nome = nome;
//     this.idade = idade;
//     this.telefone = telefone;
// }

// const pessoa1 = new Pessoa('Melissa','68','2198739878');
// const pessoa2 = new Pessoa('Ilana','22','2134324345');

// console.log(pessoa1.nome);
// console.log(pessoa1.idade);
// console.log(pessoa1.telefone);

// console.log('------------------------------');

// console.log(pessoa2.nome);
// console.log(pessoa2.idade);
// console.log(pessoa2.telefone);





function Planner(dia,mes,ano){
    this.ano = ano;
    this.mes = mes;
    this.dia = dia;
    this.plannerz = function(){
        return `${this.ano}`;
    }
}

const planner1 = new Planner('03','agosto','2022');

console.log(planner1.plannerz());


























// class

// Array





















