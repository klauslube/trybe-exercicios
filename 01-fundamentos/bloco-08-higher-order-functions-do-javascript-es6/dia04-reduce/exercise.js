
// exercicio 1

/* const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
// console.log(arrays.flat()); // flat é uma alternativa que reduz uma matriz de arrays mais rapidamente

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc,arr)  => acc.concat(arr), []);
}
console.log(flatten()); */

// exercicio 2 a 4

/* const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
 */

/* function reduceNames() {
  return books.reduce((acc, names) => acc + `${names.author.name} ,`, ''); // iniciar acumulador com valor inicial estipulado
}
console.log(reduceNames()); */


/* function averageAge() {
  // escreva seu código aqui
  const numBooks = books.length;
  return books.reduce((acc, age)  => acc + (age.releaseYear - age.author.birthYear), 0)/numBooks;
}
console.log(averageAge()); */


/* const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((acc,maior) => acc.name.length < maior.name.length ? maior : acc)
}
console.log(longestNamedBook()); */

// exercicio 5

/* const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() { // solução do gabarito
  return names.reduce((acc, str) => acc + str.split('').reduce((acc2, word) => {
    if(word.toLowerCase() === 'a') return acc2 + 1; return acc2;
  },0),0);
}
console.log(containsA()); */

// exercicio 6

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((value1, index) => ({
  nome: value1, average: (grades[index].reduce((acc, grade) => acc + grade)/grades[index].length),
  }))
   
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
console.log(studentAverage());