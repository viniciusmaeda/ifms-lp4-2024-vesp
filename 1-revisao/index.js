// ---------------------------------------------------
// Revisão de Funções

// forma convencional de criar funções
function somar(n1, n2) {
  let r = n1 + n2;
  return r;
}

function subtrair(n1, n2) {
  let r = n1 - n2;
  return r;
}

let numero1 = 15;
let numero2 = 9;

console.log('A soma de 3 + 5 é: ', somar(numero1, numero2));
console.log('A subtração de 5 - 3 é: ', subtrair(numero2, numero1));

// ---------------------------------------------------
// Arrow Functions
const multiplicar = (n1, n2) => {
  let r = n1 * n2;
  return r;
}

// arrow function várias linhas
// const dividir = (n1, n2) => {
//   return n1 / n2;
// }

// arrow function com uma linha
// const dividir = (n1, n2) => { return n1 / n2; }

// arry function simplificada
const dividir = (n1, n2) => n1 / n2;

console.log('A multiplicação de 3 * 5 é: ', multiplicar(numero1, numero2));
console.log('A divisão de 5 / 3 é: ', dividir(numero2, numero1));


// ---------------------------------------------------
// Template String
// console.log('A soma de 3 + 5 é: ', somar(numero1, numero2));
// console.log('A soma de ', numero1, ' + ', numero2, ' é: ', somar(numero1, numero2));
console.log(`A soma de ${numero1} + ${numero2} é: ${somar(numero1, numero2)}`);

