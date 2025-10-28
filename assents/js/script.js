// PARTE 1: Variáveis e Tipos de Dados 
let nome= "Leticia";
console.log(nome);

let idade= 18;
let altura= 1.67;
console.log("Tenho " +idade+ " anos e " +altura+ " metros de altura." );
let estudando = true;

if (estudando) {
    console.log("Estou estudando JavaScript!");} 
else {
    console.log("Não estou estudando no momento.");}


// PARTE 2: Operadores
let num1 = 10;
let num2 = 5;
let soma = num1 + num2;
console.log("A soma é:", soma);

let resto = num1 % num2;
console.log("O resto da divisão é:", resto);

idade = 20;
let maiorDeIdade = idade >= 18;
console.log("É maior de idade?", maiorDeIdade);


// PARTE 3: Condições
let numero = Number(prompt("Digite um número:"));
if (numero % 2 === 0) {
  console.log("O número é par.");} 
  else {
  console.log("O número é ímpar.");}

let idadeUsuario = Number(prompt("Digite sua idade:"));
if (idadeUsuario >= 18) {
  console.log("Você pode dirigir.");} 
else {
  console.log("Você não pode dirigir.");}

let nota = Number(prompt("Digite sua nota (0 a 10):"));
if (nota < 5) {
  console.log("Reprovado");} 
  else if (nota >= 5 && nota < 7) {
  console.log("Recuperação");}
  else if (nota >= 7 && nota <= 10) {
  console.log("Aprovado");} 
  else {
  console.log("Nota inválida!");}


// PARTE 4: Laços de Repetição
for (let i = 1; i <= 10; i++) {
  console.log(i);}
numero = Number(prompt("Digite um número para ver sua tabuada:"));

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);}
let senha = prompt("Digite a senha:");

while (senha !== "0000") {
  senha = prompt("Senha incorreta! Tente novamente:");}
console.log("Senha correta! Acesso permitido.");


// PARTE 5: Funções
function somar(num1, num2) {
  return num1 + num2;}
console.log(somar(5, 3));

function cumprimentar(nome) {
  return `Olá, ${nome}!`;}
console.log(cumprimentar("Letícia"));

function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;}
console.log(calcularMedia(7, 8, 9));


// PARTE 6: Arrays
let nomes = ["Ana", "Bruno", "Carla", "Diego", "Eduardo"];
console.log("Primeiro nome:", nomes[0]);
console.log("Último nome:", nomes[nomes.length - 1]);

nomes.push("Fernanda");
console.log("Lista de nomes atualizada:", nomes);

for (let i = 0; i < nomes.length; i++) {
  console.log(`Nome ${i + 1}: ${nomes[i]}`);}


// PARTE 7: Objetos
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022};

console.log(carro);
console.log(`O carro é um ${carro.marca} ${carro.modelo}, ano ${carro.ano}.`);

let aluno = {
  nome: "Maria",
  idade: 17,
  notas: [8, 9, 7]};

let media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / aluno.notas.length;
console.log(`Aluno: ${aluno.nome}`);
console.log(`Média: ${media}`);

let produtos = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 120 },
  { nome: "Monitor", preco: 900 }];

for (let i = 0; i < produtos.length; i++) {
  console.log(`Produto: ${produtos[i].nome} - Preço: R$${produtos[i].preco}`);}


// PARTE 9: Manipulação de Strings
nome = prompt("Digite seu nome:");
console.log(`Seu nome tem ${nome.length} letras.`);

let frase = prompt("Digite uma frase:");
console.log(frase.toUpperCase());

let texto = prompt("Digite um texto:");
console.log(texto.substring(0, 5));


// PARTE 10: Promises e Fetch API
const minhaPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Concluído!");
  }, 3000);});

minhaPromise.then((mensagem) => {
  console.log(mensagem);});

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((resposta) => resposta.json()) 
  .then((dados) => {
    console.log("Dados recebidos:", dados); })
  .catch((erro) => {
    console.error("Erro ao buscar dados:", erro);});

  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((resposta) => resposta.json())
  .then((posts) => {
    console.log("Títulos dos posts:");
    posts.forEach((post) => {
      console.log(post.title); });})
  .catch((erro) => {
    console.error("Erro ao buscar posts:", erro); });