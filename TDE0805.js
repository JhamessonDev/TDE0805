// Exercício 01
// Escreva na tela todos os números pares de 0 a 100
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}

let numeros = [2, 4, 6, 8];
let soma = 0;

// Exercício 02
// Criar um algoritmo que percorre um array de números qualquer e retorna a soma total desses números

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log("Soma: " + soma);

// Exercício 03
// Crie uma função que remova todos os números negativos de um array
// ex: [-1, 1, -2, 2, -3, 3] -> [1, 2, 3]
function removerNegativos(array) {
    return array.filter(numero => numero >= 0);
}
  
let numerosArray = [-1, 1, -2, 2, -3, 3];
let numerosSemNegativos = removerNegativos(numerosArray);

console.log(numerosSemNegativos);

// Exercício 04
// Percorra um array de numeros qualquer.. e crie um novo array com todos os numeros do primeiro multiplicado por 2
// ex: [1, 2, 3, 4, 5] -> [2, 4, 6, 8, 10]

let arrayNumeros = [1, 2, 3, 4, 5];
let numerosMultiplicados = [];

for (let i = 0; i < arrayNumeros.length; i++) {
  numerosMultiplicados.push(arrayNumeros[i] * 2);
}

console.log(numerosMultiplicados);


/* [[Bonus]] -> Crie uma função que soma dois numeros e devolve uma Promise. Caso a soma seja Par o valor deve ser resolvido e caso seja Impar deve ser rejeitado.

ex:
soma(1, 2).then(res => {

    console.log("Valor é par")

}).catch(err => {

    console.log("Valor é impar")

})
*/

function somar(num1, num2) {
    return new Promise((resolve, reject) => {
      let resultado = num1 + num2;
      if (resultado % 2 === 0) {
        resolve(resultado);
      } else {
        reject(resultado);
      }
    });
  }
  
  somar(1, 2)
    .then(res => {
      console.log("Valor é par: " + res);
    })
    .catch(err => {
      console.log("Valor é ímpar: " + err);
    });
  