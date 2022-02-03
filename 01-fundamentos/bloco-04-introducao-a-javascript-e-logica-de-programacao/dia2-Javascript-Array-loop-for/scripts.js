 /* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];  */
/*
for(let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);

} */

 /* let sum = 0;
for(let i = 0; i < numbers.length; i += 1) {
    sum = sum + numbers[i];
   
} 
 console.log(sum); 

 let media = sum/[numbers.length];
 console.log(media);

 if(media > 20) {
     console.log("valor maior que 20")
 }
 else {
     console.log("valor menor ou igual a 20");
 } */

/* let maior = numbers[0];

for(let index = 1; index < numbers.length; index+= 1) {
    if(numbers[index] > maior) {
        maior = numbers[index];
    }
}
console.log(maior) */

/* let impar = 0;
for(let i = 0; i < numbers.length; i += 1) {
    if(numbers[i] % 2 == 0) {
        
    }
    else {
        impar = impar + 1;
    }

}
if(impar == 0) {
    console.log("nenhum valopr impar encontrado");
}
else {
   console.log(impar); 
}
 */

/* let menor = numbers[0];
for(let i = 1; i < numbers.length; i += 1) {
    if(numbers[i] < menor) {
        menor = numbers[i];
    }
}
console.log(menor);
 */

/* let array =[];
for(let i = 0; i < 26; i += 1) {
    array.push(i);
}
console.log(array);

for(i = 0; i < array.length; i += 1) {
   console.log(array[i]/2); 
}
 */



// BONUS

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; */

/* for(i = 1; i < numbers.length; i += 1) {
    for(let j = 0; j < i; j += 1) {
        if(numbers[i] < numbers[j]) {
            let position = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = position;
        
        }
    }
    
}console.log(numbers); */

/*  for(i = 1; i < numbers.length; i += 1) {
    for(let j = 0; j < i; j += 1) {
        if(numbers[i] > numbers[j]) {
            let position = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = position;
        
        }
    }
    
}console.log(numbers);  */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);