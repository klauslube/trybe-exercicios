// questao 1
/* 
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangles) // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
}); */

//questao 2

/* const sum = (...nums) => nums.reduce((acc , num) => acc + num, 0);
console.log(sum(3,3)); */

//questao 3 
/* 
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};
// complete a assinatura da função abaixo
const persons = {...alex,...gunnar}
const personLikes = (person) => `${person.name} is ${person.age} years old and likes ${person.likes}.`;

console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// outro jeito 
const personLikes = ({ name, age, likes }) => (
  `${name} is ${age} years old and likes ${likes.join(', ')}.`
);
 */

//questao 4

/* const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const filterPeople = (arr) => arr.filter(({nationality,bornIn}) => nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000);
console.log(filterPeople(people)); */

// questao 5

/* const myList = [1, 2, 3];


// escreva swap abaixo
const swap = ([a, b, c]) => [c, b, a];
console.log(swap(myList)); */

// questao 6
/* 
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = ([carro,marca,ano]) => ({ carro, marca , ano});
console.log(toObject(palio)); */

// questao 7

/* const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo
const shipLength = ({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long` 
console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'
 */
// questao 8 

// escreva greet abaixo
const greet = (name, msg = 'Hi') => `${msg} ${name}`;
console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'
console.log(greet('', 'hi'));