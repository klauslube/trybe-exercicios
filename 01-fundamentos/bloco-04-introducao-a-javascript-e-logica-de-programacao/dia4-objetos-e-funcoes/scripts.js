/* let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,

    medals: {
        golden: 2,
        silver: 3,
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}
console.log("a jogadora " + player.name + ' ' + player.lastName + " tem " + player.age + " anos de idade");

console.log("a jogadora " + player.name + ' ' + player.lastName + "  foi eleita a melhor a melhor do mundo por 6 vezes:" + player.bestInTheWorld);

console.log("a jogadora possui " + player.medals.golden + " medalhas de ouro " + player.medals.silver + " medalhas de prata."); */



/* let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for(let key in names) {
      console.log("Olá " + names[key])
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let key in car) {
      console.log(key, car[key]);
  } */


  // parte 1 - OBJETOS

/*   let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  console.log("Bem vinda, " + info.personagem);
  console.log(info.recorrente);

  for(let key in info) {
      console.log(key);
  }

  for(let key in info) {
    console.log(info[key]);
}

let info2 = {
    personagem: 'Tio Patinha',
    origem: 'Christmas on Bear Mountain,Dells Four Color Comics #178',
    nota:  'último MacPatinhas',
    recorrente: 'Sim',
}

for(let properties in info) {
    if(properties === 'recorrente' && info[properties] === 'Sim' && info2[properties] === 'Sim') {
        console.log("Ambos recorrente");
    } else {
        console.log(info[properties] + ' e ' + info2[properties]);
    }
}
 */

/* let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      },
    ],
  };

  console.log("O livro favorito de " + leitor.nome + ' '+ leitor.sobrenome +  ' se chama "' + leitor.livrosFavoritos[0].titulo + '"' );

  console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos" ); */

  // PARTE 2 - FUNÇOES

/* function verificaPalindrome(palavra) {
    let reverso = palavra.split('').reverse().join('');
    if(palavra === reverso) {
        return true;
    }
        return false;
} */

/* console.log(verificaPalindrome('arara'));

function maxValue(array) {
    let indexMaior = 0;
    for(let index in array) {
        if(array[indexMaior] < array[index]) {
            indexMaior = index;
        }
    }
    return indexMaior;
} */

/* console.log(maxValue([2, 3, 6, 7, 10, 1]));


function minValue(array) {
    let indexMenor = 0;
    for(let index in array) {
        if(array[indexMenor] > array[index]) {
            indexMenor = index;
        }
    }
    return indexMenor;
}

console.log(minValue([2, 3, 6, 7, 10, 1])); */

/* function maiorNome(array) {
    let indexMaior = 0;
    for(let index in array) {
        for(let index2 = 0; index2 < array[index2].length; index2 += 1) {
            if(array[indexMaior].length < array[index2].length) {
            indexMaior = index;
        }
        }
        
    }
    return array[indexMaior];
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); */

/* function numRep(array) {
    let contRep = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    let maiorRep = array[0];
    for(let index in array) {
        let verificaNumero = array[index];
        for(let index2 in array) {
            if(verificaNumero === array[index2]) {
                contNumero += 1;
            }
        }
        if(contNumero > contRep) {
            contRep = contNumero;
            indexNumeroRepetido = index;
        }
        contNumero = 0;
    }    
    return array[indexNumeroRepetido];
}

console.log(numRep([2, 3, 2, 5, 8, 2, 3])); */


/* function somatorio(numero) {
    let num = [numero];
    let sum = 0;
    for(let index = 0; index <= numero; index += 1) {
        sum += index;
    }
    return sum;
}
console.log(somatorio(5)); */

function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
        controle = false;
      }
    }
    return controle;
  }