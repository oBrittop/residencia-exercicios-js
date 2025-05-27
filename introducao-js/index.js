/*
Data types (primitivos):
- boolean
- number
  - float 
  - integer
  - bigint
- undefined
- null
- symbol
*/

/**
 * const, var e ler
 * const: variável que não muda
 * var: variável que permite alteração, mas vaza escopo
 * let: variável que permite alteração, no entanto, não vaza escopo
 */

/** Exercício 01:
 * - Declarar nome como uma string constante
 * - Declarar uma string constante para o endereço
 * - Declarar uma variável para idade
 * - Declarar uma variável booleana para se o seu curso é engenharia
 * de software
 * - Declarar variável (var ou let) para formatura sendo null
 * - Declarar variável (var ou let) para mestrado sendo undefined
 */
const nome = "Allan";
const endereco = "Ceilândia";
let idade = 19;
let engenharia = false;
let formatura = null;
let mestrado;

// -----------------------------
/**
 * Exercício 02: definir um objeto pessoa que contenha todos os dados
 * das variáveis anteriores
 *
 * {
 *   <chave>: <valor>,
 *   "<chave>": <valor>
 * }
 */

// nome, endereço, idade, engenharia, formatura e mestrado

const pessoa = {
  nome: "Allan",
  enderco: "Ceilândia",
  idade: 19,
  engenharia: false,
  formatura: null,
  mestrado: undefined,
  falar: function () {
    console.log("Oi");
  },
};

// Acessar atributo do objeto: "."
pessoa.nome;
pessoa.falar();

// ---------------------------------
const cores = ["vermelho", "verde", "azul"];
const array = [
  1,
  true,
  false,
  "Qualquer coisa",
  1.1,
  100000000000000000000000000000000000000000000n,
];

/** Exercício 03:
 * 3.1) Declarem um array com a lista de comidas favoritas de vocês
 * 3.2) Declarem um array contendo números de diferentes tipos: PI,
 * Euler, idade, boolean, um objeto
 * 3.3) Array de objeto pessoa
 */
// 3.3
const comidas = ["Arroz", "frango", "brócolis", ""];

// 3.2
const numeros = [Math.PI, Math.E, 19, false, {}];

// 3.3
const listaPessoas = [
  {
    nome: "Allan",
    enderco: "Ceilândia",
    idade: 19,
    engenharia: false,
    formatura: null,
    mestrado: undefined,
    falar: function () {
      console.log("Oi");
    },
  },
  {
    nome: "Leydson",
    enderco: "Centro Oeste",
    idade: 19,
    engenharia: true,
    formatura: null,
    mestrado: undefined,
    falar: function () {
      console.log("Oi");
    },
  },
];
// Transforma objeto em string
console.log(JSON.stringify(listaPessoas[0]));

// Laços condicionais (if/ else if/ else ou switch/case)
// Exercício 4.1: validar se a pessoa é maior de idade e dar um
// console.log caso tenha, caso contrário, exibir uma mensagem no
// console.log informando ser menor de idade
const maiorDeIdade = listaPessoas[0].idade >= 18;
if (maiorDeIdade) {
  console.log("Maior");
} else {
  console.log("Menor");
}

// Exercício 4.2: Criar switch/case com os intervalos da tabela IMC
// e exibir um log para cada um
function calculoIMC(peso, altura) {
  return peso / altura ** 2;
}

const IMC = calculoIMC(73.9, 1.8);
// const IMC = 22.81;

console.log("IMC", IMC);

switch (true) {
  case IMC < 19.1:
    console.log("Abaixo do peso");
    break;
  case IMC > 19.1 && IMC <= 25.8:
    console.log("Peso normal");
    break;
  case IMC > 25.9 && IMC <= 27.3:
    console.log("Pouco acima do peso");
    break;
  case IMC > 27.4 && IMC <= 32.3:
    console.log("Acima do peso");
    break;
  case IMC >= 32.4:
    console.log("Obesidade");
    break;
  default:
    console.log("Número inválido");
    break;
}

// Funções: procedures e funções
// procedure: função que não tem retorno
// função: possui retorno
// Exercício: declarar uma função que irá realizar o cálculo do IMC
// E retornar o valor e após isso, encaixar o valor no switch/case
// acima
// Fórmula: peso / altura * altura || peso / altura ** 2 ||
// peso / Math.pow(altura, 2)
