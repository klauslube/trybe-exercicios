/*01 - Lanchonete da TrybeA Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso irão pedir.Para isso escreva um algoritmo que recebe o número da opção escolhida conforme tabela abaixo e retorne a string inteira do respectivo lanche:"1 - Trybe Lanche Feliz""2 - McTrybe""3 - TrybeWooper""4 - X-Trybe""5 - Triplo Trybe com JS"Caso a pessoa escolha uma opção que não existe na tabela acima, retorne:-------------------------------"Não temos esta opção ainda :("-------------------------------Utilize Switch/Case para resolver este problema.*/




/* 
Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne a mensagem informando a pessoa mais jovem no seguinte formato:
---------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade."
--------------------------------------------------- */




/*06 - Taxa Metabólica Basal Renata é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal) em seu site.Escreva um algoritmo que recebe os dados a seguir:* age: número maior que 0* sex: M ou F* weight: Em (kg) com número maior que 0* height: Em (cm) com número maior que 0 Fórmula para homens:* (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5 Fórmula para mulheres:* (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161O retorno deve ser no seguinte formato:---------------------------------------"A taxa metabólica basal é: x Kcal"---------------------------------------*/


let age = 1;
let sex = "M";
let weight = 10;
let height = 10;
let formula = 0;
if(sex == "M") {
    formula = (height * 6.25) + (weight * 9.99) - (age * 4,92) + 5;
    console.log("A taxa metabolica basal é:" + formula + " Kcal");
} else  {
    formula = (height * 6.25) + (weight * 9.99) - (age * 4,92) -1610;
    console.log("A taxa metabolica basal é:" + formula + " Kcal");
}
