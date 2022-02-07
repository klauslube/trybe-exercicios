// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:

/* let sum = 0;

for(let i = 1; i <=50; i+= 1) {
    sum += i;
}

console.log(sum); */


//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.


/* let sum = 0;

for(let i = 2; i <= 150; i += 1) {
    if(i % 3 == 0) {
        sum += 1;
    }
}
if(sum == 50) {
    console.log("mensagem secreta");
}
else {
    console.log(sum)
} */


// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

/* let lista = ["pedra","papel","tesoura"];
let elemento1 = lista[Math.floor(Math.random() * lista.length)];
let elemento2 = lista[Math.floor(Math.random() * lista.length)];

console.log(`Jogador1: ${elemento1}!`);
console.log(`Jogador2: ${elemento2}!`);

if(elemento1 == elemento2) {
    console.log('Empate');
}
else if(elemento1 == 'tesoura' && elemento2 == 'papel') {
    console.log("Jogador 1 ganhou");
} 
else if(elemento1 == 'tesoura' && elemento2 == 'pedra') {
    console.log("Jogador 2 ganhou");
} 
else if(elemento1 == 'pedra' && elemento2 == 'papel') {
    console.log("Jogador 2 ganhou");
} else if(elemento1 == 'pedra' && elemento2 == 'tesoura') {
    console.log("Jogador 2 ganhou");
} 
else if(elemento1 == 'papel' && elemento2 == 'pedra') {
    console.log("Jogador 1 ganhou");
} 
else if(elemento1 == 'papel' && elemento2 == 'tesoura') {
    console.log("Jogador 2 ganhou");
} 
else {
    console.log("erro");
}
 */

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.


/* let idade = 18;
idade >= 18 ? console.log("A pessoa é maior de idade") : console.log("A pessoa é menor de idade"); */
   


// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

