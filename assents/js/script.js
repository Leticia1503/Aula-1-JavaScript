let nome= "Leticia";
console.log(nome);

let idade= 18;
let altura= 1.67;
console.log("Tenho " +idade+ " anos e " +altura+ " metros de altura." );
let estudando = true;

if (estudando) {
    console.log("Estou estudando JavaScript!");
} 
else {
    console.log("Não estou estudando no momento.");
}


// Somar dois números e mostrar o resultado no console
let num1 = 8;
let num2 = 5;
let soma = num1 + num2;
console.log("A soma é:", soma);

// Dividir dois números e mostrar o resto da divisão no console
let dividendo = 17;
let divisor = 3;
let resto = dividendo % divisor;
console.log("O resto da divisão é:", resto);

// Verificar se a idade é maior ou igual a 18
idade = 20;
let maiorDeIdade = idade >= 18;
console.log("É maior de idade?", maiorDeIdade);

// Exibindo os resultados na página também
document.getElementById("resultados").innerHTML = `
  <p> A soma de ${num1} + ${num2} = <strong>${soma}</strong></p>
  <p> O resto da divisão de ${dividendo} ÷ ${divisor} = <strong>${resto}</strong></p>
  <p> Idade: ${idade} → Maior de idade? <strong>${maiorDeIdade}</strong></p>
`;