/* // Faça uma lista com as suas frutas favoritas
const specialFruit = ['apple', 'strawberry', 'grape'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['noodles', 'strognoff', 'hamburguer'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
 const fruitsalad = [...fruit,...additional]
 return fruitsalad
};

console.log(fruitSalad(specialFruit, additionalItens));
 */


/////////////////////////////////////////


/* const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const everything = {...user,...jobInfos};

console.log(`Hi, my name is ${user.name}, Im ${user.age} years old and im ${user.nationality}. I work as a ${jobInfos.profession} and my squad is ${jobInfos.squad}`); */


///////////////////


/* const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao, realizaSaudacao] = saudacoes;

console.log (realizaSaudacao(saudacao)); // Olá */

/* let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água */

/* let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];
 */

/* const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
 */

/* 
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542)); */
/* 
const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number* value;
};

console.log(multiply(1)); */